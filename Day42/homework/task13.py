# 14) დაწერეთ try-except-else-finally ბლოკი, რომელიც:

# ხსნის ფაილს "value.txt"
# კითხულობს რიცხვს
# ყოფს 50-ს ამ რიცხვზე
# წარმატების შემთხვევაში დაბეჭდავს შედეგს
# ბოლოს ყოველთვის დახურავს ფაილს

try:
    with open("value.txt", "r") as file:
        num = int(input("Enter a number: "))
        result = num / 50
        print(result)
except ValueError:
    print("Invalid data in the file.")
except ZeroDivisionError:
    print("Division by zero is not allowed.")
