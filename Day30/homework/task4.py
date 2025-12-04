# 5) დაწერე ფუნქცია, რომელიც იღებს ერთ რიცხვს და აბრუნებს "Even" თუ ლუწია, ან "Odd" თუ კენტია

def evenodd(num):
    if num % 2 == 0:
        return "Odd"
    else:
        return "Even"
    

print(evenodd(15))