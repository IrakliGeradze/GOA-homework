# 5) დაწერეთ ფუნქცია, რომელიც მიიღებს სიას და დაბეჭდავს უნიკალურ ელემენტებს და მათ რაოდენობას სიაში, მაგ: apple - 2, banana - 3... გამოიყენეთ .count მეთოდი

def unique_count(list):
    printed = []
    for item in list:
        if item not in printed:
            count = list.count(item)
            print(item - count)
            printed.append(item)