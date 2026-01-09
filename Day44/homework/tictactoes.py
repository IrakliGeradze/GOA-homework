board = [["" for _ in range(3)] for _ in range(3)]
def display():
    for row in board:
        print("|".join(row))
        print("-" * 9)
def check_winner():
    for row in board:
        if row[0] == row[1] == row[2] != "":
            return row[0]
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] != "":
            return board[0][col]
    if board[0][0] == board[1][1] == board[2][2] != "":
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] != "":
        return board[0][2]
    return None
def play():
    player = "x"
    moves = 0
    while moves < 9:
        display()
        print(f"Player {player}'s turn")
        row = input("enter row 1-3: ")
        col = input("enter col 1-3: ")
        if not row.isdigit() or not col.isdigit():
            print("please user numbers between 1-3")
            continue
        row = int(row) - 1
        col = int(col) - 1
        if row < 0 or row > 2 or col < 0 or col > 2:
            print("please user numbers between 1-3")
            continue
        if board[row][col] != " ":
            print("already taken")
            continue
        board[row][col] = player
        moves += 1
        winner = check_winner()
        if winner:
            display()
            print(f"Player 1 Winner!")
            return
        player = "0" if player == "x" else "x"
    display()
    print("draw")

print(play())