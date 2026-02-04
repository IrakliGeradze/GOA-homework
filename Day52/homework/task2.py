# 4) შექმენით ფუნქცია, რომელიც მიიღებს 'kwargs'-ით ადამიანის მონაცემებს (სახელი, ასაკი) და დაბეჭდავს "სახელი: X, ასაკი: Y"

def ragac(**kwargs):
    return f"სახელი: {kwargs['name']}, ასაკი: {kwargs['age']}"

print(ragac("luka", 19))