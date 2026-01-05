# 4) რიცხვების სიიდან "nums = list(range(1, 21))" შექმენით ახალი სია კვადრატებით, ჯერ "for"-ით, შემდეგ list comprehension-ით. შემდეგ სცადეთ მსგავსი მაგალითი სხვა მოქმედებით

nums = list(range(1, 21))
squared_nums = []
for num in nums:
    squared_nums.append(num ** 2)
print(squared_nums)

squared_nums = [num ** 2 for num in nums]
print(squared_nums)