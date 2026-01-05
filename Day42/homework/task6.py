# 7) სცადეთ რიცხვი გაყვოთ ნულზე, გამოიყენეთ "try" და "except" რათა თავიდან აიცილოთ შეცდომა და დაბეჭდოთ „ნულზე გაყოფა არ შეიძლება“

try:
    num = int(input("Enter a number: "))
    result = num / 0
    print(result)
except ZeroDivisionError:
    print("Division by zero is not allowed.")