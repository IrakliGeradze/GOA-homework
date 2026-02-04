# 5) შექმენით ფუნქცია, რომელიც მიიღებს 'kwargs'-ით მანქანის მონაცემებს და დაბეჭდავს თითოეულ გასაღებს და მნიშვნელობას

def ragac(**kwargs):
    for key in kwargs:
        print(f"{key}: {kwargs[key]}")

print(ragac("ragac", "Raga"))