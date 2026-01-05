# 9) სთხოვეთ მომხმარებელს შეიყვანოს რიცხვი "input()"-ით და გადააკეთეთ "int"-ად. გამოიყენეთ "try" და "except", რომ გაუმკლავდეთ შეცდომას თუკი სიმბოლოები შეიყვანეს. დაბეჭდეთ „შეიყვანეთ მხოლოდ რიცხვი“

try:
    num = int(input("Enter a number: "))
    print(num)
except ValueError:
    print("Please enter a valid number.")
