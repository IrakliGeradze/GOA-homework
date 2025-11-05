total = 0

while True:
    number = int(input("Enter a number: "))
    if number < 0:
        print("Negative number entered. Stopping...")
        break
    else:
        total += number

print("Sum of all positive numbers is:", total)