#score = 900
#if score > 100:
#    print("Exam successfully passed")


#score = int(input("Enter your exam results: "))
#if score > 50:
#    print("Exam passed")

#    print("Student grated")

#ინდენტანცია - დატოვილი ადგილი სტანდარტულად 4 სპეისი იმისთვის რომ გავიგოთ თუ რა შედის კონკრეტული სტრუკტურის კოდის ბლოკში

#if - პირობითი განცხადებით ვამოწმებთ რაღაც პირობას და ის საშვალება გვაძლევს რომ გარკვეული ინსტრუქციები გავუშვათ მხოლოდ იმ შემთხვევაში თუ პირობა არის ჭეშმარიტი



#exam_score = int(input("Enter your exam results: "))
#if exam_score > 50:
#    print("Exam passed")
#else:
#    print("Exam failed")


#score = int(input("Enter your exam results: "))
#if score > 80:
#    print("Grade A")
#else:
#    print("Grade B")


#exam_score1 = int(input("Enter your exam score: "))
#if exam_score1 > 90:
#    print("A")
#elif exam_score1 > 80:
#    print("B")
#elif exam_score1 > 70:
#    print("C")
#elif exam_score1 > 60:
#    print("D")
#elif exam_score1 > 50:
#    print("E")
#else:
#    print("F")


#password = "Irakli123"
#username = "Irakli123"

#if password != "" and password != username:
#    print("Password changed")
#else:
#    print("Please pick different password")


secretpin = "5150"
attempts = 3
pin_code = ""

while attempts > 0:
    pin_code = input("Enter pin code: ")

    if pin_code == secretpin:
        print("You have guessed the code")
        break

    else:
        attempts -= 1
        print("Wrong, you have " + str(attempts) + " " + "attempts left")

if attempts == 0 and pin_code != secretpin:
    print("You blocked the keylock")





for num in range(30, 60):
    if num == 50:    
        continue

    if num  == 55:
        break

    print(num)
