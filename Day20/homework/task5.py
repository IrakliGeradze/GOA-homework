#6) მომხმარებლებს შეაყვანინეთ ინდექსი და ახალი ფერი, შეცვალეთ ამ ინდექსზე არსებული ფერი სიაში colors = [თეთრი, შავი, ნარინჯისფერი, ვარდისფერი] და დაბეჭდეთ განახლებული სია


colors = ["white", "black", "orange", "pink"]

my_index = int(input("Enter your index (0-3): "))

colors[my_index] = input("Enter your color: ")
print(colors)