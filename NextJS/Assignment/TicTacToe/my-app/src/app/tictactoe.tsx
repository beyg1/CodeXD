"use client";

import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));// State to store the board, initialized with 9 empty strings
  const [turn, setTurn] = useState<string>("X"); // State to store the current player's turn, starting with "X"
  const [winner, setWinner] = useState<string | null>(null); // State to store the winner, initially null
  const [winningCells, setWinningCells] = useState<number[]>([]);// State to store the winning cells, initially an empty array

  const checkWinner = (board: string[]): string | null => {// Function to check if there's a winner
    const winningCombinations = [
      // Array of all possible winning combinations
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombinations) {// Loop through each winning combination
      const [a, b, c] = combo; // Destructure the indices of the winning combination
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
  //Check if all three cells in the combination have the same non-empty value    
        setWinningCells(combo);// Set the winning cells
        return board[a];// Return the winner ("X" or "O")
      }
    }

    return null;// Return null if there's no winner
  };

  const handleClick = (index: number) => {
    // Function to handle a cell click
    if (winner || board[index] !== "") return; // If there's already a winner or the cell is not empty, do nothing

    const newBoard = [...board];// Create a copy of the board
    newBoard[index] = turn;// Set the clicked cell to the current player's turn
    setBoard(newBoard);// Update the board state

    const winningPlayer = checkWinner(newBoard);// Check if there's a winner with the new board
    if (winningPlayer) {
      setWinner(winningPlayer);// If there's a winner, update the winner state
      return;
    }

    setTurn(turn === "X" ? "O" : "X"); // Otherwise, switch the turn to the other player
  };

  const handleReset = () => { // Function to reset the game
    setBoard(Array(9).fill("")); // Reset the board to 9 empty strings
    setTurn("X"); // Set the turn back to "X"
    setWinner(null); // Clear the winner
    setWinningCells([]); // Clear the winning cells
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-300 to-slate-300">
      <div className="grid grid-cols-3 gap-1 w-72 sm:w-80 md:w-96 lg:w-128 xl:w-144">
        {board.map((value, index) => (
          <div
            key={index}
            className={`flex items-center justify-center border border-gray-400 text-2xl cursor-pointer bg-white transition-colors duration-500 w-full h-full`}
            style={{
              aspectRatio: '1/1',
              backgroundColor: winner && winningCells.includes(index) ? '#a7f3d0' : 'white',
              transition: 'background-color 0.5s ease',
            }}
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      {winner && (
        <div className="mt-4 text-2xl font-bold text-green-500">
          {`${winner} wins!`}
        </div>
      )}
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        onClick={handleReset}
      >
        Reset
      </button>

      {winner && (
        <div className="absolute top-0 left-0 right-0 pointer-events-none">
          <div className="flex justify-center p-4">
             <div className="text-5xl font-bold text-orange-500 animate-pulse">
                 🎉 Congratulations {winner}! 🎉
             </div>
          </div>
        </div>
)}
    </div>
  );
};

export default TicTacToe;