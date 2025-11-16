# 3) მომხმარებელს შემოატანინეთ რიცხვი 0-იდან 4-მდე და შეინახეთ ის "user_choice"-ის ცვლადში, შემდეგ ბოსტნეულსი სიიდან დაუბეჭდეთ ის ელემენტი რომელიც მომხმარებელმა აირჩია, ესეიგი იმ user_choice ინდექსზე მყოფი ელემენტი სიაში

bostneuli = ["Tomato", "Pickle", "Carrot", "Kombosto"]

user_choice = int(input("Enter numbers between 0 and 4: "))
if user_choice == 0:
    print("Your choosen bostneuli is Tomato")
elif user_choice == 1:
    print("Your choosen bostneuli is Pickle")
elif user_choice == 2:
    print("Your choosen bostneuli is Carrot")
elif user_choice == 3:
    print("Your choosen bostneuli is Kombosto")
else:
    print("Please choose between 0 and 4")