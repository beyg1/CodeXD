guess_number = 9
guess_limit = 3
guess_count = 1
while guess_count <= guess_limit:
    guess = int(input("Guess the number: "))
    guess_count += 1
    if guess == guess_number:
        print("Bingo! That's correct")
        break
else:
    print("Wrong. Try again hotshot")
