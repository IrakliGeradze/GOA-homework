#13) დაწერეთ პროგრამა სადაც მომხმარებელი შეიყვანს ორ რიცხვს და პროგრამა დაბეჭდავს რომელი მათგანია მეტი გამოიყენეთ max

first = int(input('First num: '))
second = int(input('Second num:'))

if max([first]) > max([second]):
    print(first)
elif max([first]) < max([second]):
    print(second)
#