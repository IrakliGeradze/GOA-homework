# 9) შექმენით სია და გადაიყვანეთ tuple-ად tuple() ფუნქციის გამოყენებით, შემდეგ კი გადაიყვანეთ უკან list()-ით. დაბეჭდეთ ყველა შედეგი და დაუმატეთ კომენტარები რას აკეთებს თითოეული

fruit_list = ["apple", "banana", "orange"]
print("original list: ", fruit_list)
fruits_tuple = tuple(fruit_list)
print(fruits_tuple)
new_list = list(fruits_tuple)
print(new_list)