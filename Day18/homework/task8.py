even_count = 0
odd_count = 0

while True:
    num = int(input("Enter a number: "))
    if num < 0:
        print("Negative number entered. Stopping...")
        break
    elif num % 2 == 0:
        even_count += 1
    else:
        odd_count += 1

print("Even numbers count:", even_count)
print("Odd numbers count:", odd_count)