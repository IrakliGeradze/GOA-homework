#2) დაწერეთ პროგრამა რომელიც ითხოვს ორ რიცხვს მომხმარებლისგან შემოაყვანინეთ დაწყებისა და დასრულების რიცხვი თუ მეორე რიცხვი ნაკლებია პირველზე დაბეჭდეთ არასწორი შუალედი სხვა შემთხვევაში დაბეჭდეთ ყველა რიცხვი შუალედში და იპოვეთ ამ რიცხვების ჯამი გამოიყენეთ for input int if else და sum

start = int(input("Enter your first number: "))
end = int(input("Enter your second number: "))

if end < start:
    print("არასწორი შუალედი")
else:
    total = 0  

    
    for num in range(start, end + 1):
        print(num)
        total = total + num 

    print("ჯამი არის:", total)
    
#