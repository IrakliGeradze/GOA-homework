# 15) დაწერეთ ფუნქცია, რომელიც იღებს სიას და ინდექსს, და აბრუნებს ელემენტს მოცემული ინდექსით. დაამუშავეთ IndexError გამონაკლისი, თუ ინდექსი არასწორია

def element(my_list, index):
    try:
        return my_list[index]
    except IndexError:
        print("Index is out of range")

my_list = [5, 10, 15]

