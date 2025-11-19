# 11) დაწერეთ პროგრამა რომელიც ქმნის სამ შემთხვევით რიცხვს random.randint გამოყენებით თითოეულზე გამოთვალეთ კვადრატული ფესვი math.sqrt ფუნქციით და დაბეჭდეთ შედეგები

import random
import math

first = random.randint(0, 500)
second = random.randint(0, 500)
third = random.randint(0, 500)

print(first)
print(second)
print(third)


final = math.sqrt(first)
final2 = math.sqrt(second)
final3 = math.sqrt(third)

print(final)
print(final2)
print(final3)

#