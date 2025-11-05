total = 0
count = 0

while True:
    num = int(input("Enter a number (-1 to stop): "))
    if num == -1:
        break
    total += num
    count += 1

if count > 0:
    print("Average is:", total / count)
else:
    print("No numbers were entered.")