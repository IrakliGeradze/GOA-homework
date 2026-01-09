# 2) დაწერეთ ფუნქცია, რომელიც იღებს ლექსიკონს და გასაღებს, და აბრუნებს შესაბამის მნიშვნელობას. გამოიყენეთ try-except-else-finally ბლოკი KeyError-ის დასამუშავებლად
def get_value(dictionary, key):
    try:
        value = dictionary[key]
    except KeyError:
        return f"Key not found in dictionary"
    else:
        return value
    finally:
        print("Function stopped")  
