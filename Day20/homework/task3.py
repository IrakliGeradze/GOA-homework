#4) მომხმარებლებს შეაყვანინეთ ინდექსი (0-დან 4-მდე) და დაბეჭდეთ შესაბამისი ელემენტი სიიდან colors = [წითელი, მწვანე, ლურჯი, ყვითელი, იასამნისფერი]

colors = ["წითელი", "მწვანე", "ლურჯი", "ყვითელი", "იასამნისფერი"]

your_index = int(input("Enter your index (0-4): "))

if your_index == 0:
    print("წითელი")
elif your_index == 1:
    print("მწვანე")
elif your_index == 2:
    print("ლურჯი")
elif your_index == 3:
    print("ყვითელი")
elif your_index == 4:
    print("იასამნისფერი")

else:
    print("Please Choose Between 0 and 4")