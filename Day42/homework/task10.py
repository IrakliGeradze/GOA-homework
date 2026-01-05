# 11) დაწერეთ პროგრამა, რომელიც ცდილობს გახსნას ფაილი "data.txt" წაკითხვის რეჟიმში. თუ ფაილი არ არსებობს, გამოიტანეთ შეტყობინება „ფაილი ვერ მოიძებნა“. გამოიყენეთ try-except FileNotFoundError

try:
    with open("data.txt", "r") as file:
        data = file.read()
        print(data)
except FileNotFoundError:
    print("File not found.")