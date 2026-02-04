#6)დაწერეთ დეკორატორი, რომელიც ფუნქციის გაშვების წინ დაბეჭდავს "ფუნქცია დაიწყო" და დასრულების შემდეგ "ფუნქცია დასრულდა"

def func2(func):
    def wrapper():
        print("------daiwyo------")
        x = func()
        print("--bolo mtris iyos--")
        return x
    return wrapper

@func2
def func1():
    print("Hello function 9")
    return "9"

#---------------------------------

f = func2(func1)
print(f())
