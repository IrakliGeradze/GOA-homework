# 1) დაწერეთ ფუნქცია, რომელიც იღებს სამკუთხედის ფუძეს და სიმაღლეს, და აბრუნებს ფართობს. დაამუშავეთ TypeError და ValueError გამონაკლისები
def triangle_area(base, height):
    try:
        base = float(base)
        height = float(height)
        if base <= 0 or height <= 0:
            return "Error: Base and height must be positive numbers."
        area = (base * height) / 2
        return area
    except ValueError:
        return "Please enter valid numbers"
    except TypeError:
        return "Wrong type of input"

print(triangle_area(5, 10))