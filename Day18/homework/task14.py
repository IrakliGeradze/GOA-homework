while True:
    num = int(input("Enter a number: "))
    if num == 0:
        print("Zero entered. Stopping...")
        break
    if num % 2 != 0:
        continue
    print("Even number detected")