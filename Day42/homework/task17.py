# 18) დაწერეთ პროგრამა, რომელიც მომხმარებლის შეყვანილ ფაილის სახელს ხსნის with context manager-ით და კითხულობს შიგთავსს. თუ ფაილი არ არსებობს ან წაკითხვა ვერ ხერხდება, გამოიტანეთ შესაბამისი შეტყობინება

try:
    with open(input("Enter a file name: "), "r") as file:
        data = file.read()
        print(data)
except FileNotFoundError:
    print("File not found")