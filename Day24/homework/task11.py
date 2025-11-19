#12) შექმენით პროგრამა რომელიც აგენერირებს შემთხვევითი რიცხვების სიას 5 ელემენტით გამოიყენეთ random.randint და ბოლოს დაითვალეთ ამ სიის სიგრძე და ჯამი len sum

import random

numbers = [
    random.randint(1, 100),
    random.randint(1, 100),
    random.randint(1, 100),
    random.randint(1, 100),
    random.randint(1, 100),
]

print(numbers)

finalurishedegi = len(numbers)
finaluri = sum(numbers)

print(finalurishedegi)
print(finaluri)
#