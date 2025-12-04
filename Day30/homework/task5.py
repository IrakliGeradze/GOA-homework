# 6) დაწერე ფუნქცია, რომელიც იღებს სიის ელემენტებს და აბრუნებს მათ საშუალოს

fruit = ("Apple", "gRapes", "Peach", "gRapes")

def manual_count(sequence, target):
    count = 0
    for element in sequence:
        if element == target:
            count += 1
    return count