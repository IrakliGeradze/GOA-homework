num = int(input("Enter a number: "))

if num > 0:
    if num % 2 == 0:
        print("Positive and even")
    else:
        print("Positive and odd")
elif num < 0:
    if num < -10:
        print("Negative and large")
    else:
        print("Negative and small")
else:
    print("The number is zero")