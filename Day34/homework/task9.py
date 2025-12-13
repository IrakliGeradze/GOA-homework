# 10) შექმენით set სახელად numbers, დაამატეთ მას ორი რიცხვი add() მეთოდით და წაშალეთ ორი ელემენტი remove() მეთოდით. შემდეგ შექმენით მეორე set სახელად even_numbers და გამოიყენეთ union(), intersection(), difference() ორივე set-ზე. დაუმატეთ კომენტარები, რას აკეთებს თითოეული მეთოდი

numbers = {1, 2, 3}
print(numbers)

numbers.add(4)
numbers.add(5)
print(numbers)
numbers.remove(2)
numbers.remove(3)
print(numbers)

even_numbers = {2, 4, 6, 8}
print("even_numbers:", even_numbers)
all_numbers = numbers.union(even_numbers)
print("union:", all_numbers)

common_numbers = numbers.intersection(even_numbers)
print("intersection:", common_numbers)

diff_numbers = numbers.difference(even_numbers)
print("difference:", diff_numbers)