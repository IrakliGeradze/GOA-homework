# 17) დაწერეთ ფუნქცია, რომელიც იღებს სამკუთხედის ფუძეს და სიმაღლეს, და აბრუნებს ფართობს. დაამუშავეთ TypeError და ValueError გამონაკლისები

def triangle(base, height):
    try:
        area = 0.5 * base * height
        return area
    except TypeError:
        print("Invalid data type")
    except ValueError:
        print("Invalid value")