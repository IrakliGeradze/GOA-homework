# 13) დაწერეთ პროგრამა, რომელიც ფაილიდან "numbers.txt" კითხულობს პირველ ხაზს, გადააქცევს int-ად და ყოფს 100-ს ამ რიცხვზე. დაამუშავეთ ValueError და ZeroDivisionError

try:
    with open("numbers.txt", "r") as file:
        line = file.readline()
        num = int(line.strip())
        result = num / 100 
        print(result)
except ValueError:
    print("Invalid data in the file")
except ZeroDivisionError:
    print("Division by zero is not allowed")