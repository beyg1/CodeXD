while True:
    command = input("> ").lower()

    if command == "start":
        print("Car started...")
    elif command == "stop":
        print("Car stopped.")
    elif command == "help":
        print("""
> type "start" to start the car.
> type "stop" to stop the car.
> type "help" to see the commands.
> type "quit" to quit the game.
        """)
    elif command == "quit":
        break
    else:
        print("Invalid Command. Type 'help' to see the commands.")
