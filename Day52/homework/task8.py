# 10) დაწერეთ დეკორატორი, რომელიც ფუნქციის დაბრუნებულ ტექსტს გადააქცევს დიდ ასოებად

def didi(func):
    def wrapper():
        x = func()
        return x.upper()
    return wrapper

@didi
def ragac():
    return "hello"

print(ragac())