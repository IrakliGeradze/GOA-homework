# 16) დაწერეთ ფუნქცია, რომელიც იღებს ლექსიკონს და გასაღებს, და აბრუნებს შესაბამის მნიშვნელობას. გამოიყენეთ try-except-else-finally ბლოკი KeyError-ის დასამუშავებლად

def get_value(my_dict, key):
    try:
        value = my_dict[key]
    except KeyError:
        print("Key not found in the dictionary.")
    else:
        return value
    finally:
        print("Shesrulebull")