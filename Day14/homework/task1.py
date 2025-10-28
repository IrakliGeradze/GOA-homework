#5
for num in range(30):
    print(num)

#6
for num in range(15, 80):
    print(num)

#7
for num in range(0, 88):
    print(num)

#8
for num in range(0, 50, 3):
    print(num)

#9
first_num = input("Enter first number: ")
second_num = input("Enter second number: ")
for i in range(first_num + second_num + 1):
    print(i)

#10
for num in range(0, 100, 2):
    print(num)

#11
sum = 0
for i in range(20, 41):
    sum = sum + i

#12
sum = 0
for i in range(10, 51):
    sum = sum + i

#13
sum = 0
for i in range(20, 101, 2):
    sum = sum + i
    print(sum)

#14
#ver gavige bodishit

#15
i = 0
while i <= 20:
    print(i)
    i = i + 1

#16
i = 0
while i <= 30:
    print(i)
    i = i + 1

#17
i = 10
while i <= 80:
    print(i)
    i = i + 1

#18
i = 0
while i > 50:
    print(i)
    i = i + 1

#19
i = 0
while i > 50:
    print(i)
    i = i + 3

#20
i = 0
while i > 50:
    print(i)
    i = i + 2

#21
i = 0
while i > 100:
    print(i)
    i = i + 3

#22
password = "goabest123"

passw = input("Enter password: ")

while passw != passw:
    password = input("Enter password: ")

print("Bravo")

#23Bonus
pin_code = "1928"
attempts = 0

code = input("Enter PinCode:")

while code != pin_code:
    code = input("Enter PinCode:")
    attempts += 1

print("Attempts: ", attempts)
print("Pin Correct")

#24Bonus
for num in range(20, 0, -1):
    print(num)