#18) შექმენით ფუნქცია calculate_area, რომელსაც გადაეცემა ორი რიცხვი სიგრძე და სიგანე. ფუნქციამ უნდა გამოთვალოს მართკუთხედის ფართობი და return-ით დააბრუნოს შედეგი ისე, რომ შემდეგ მისი გამოყენება შეიძლებოდეს სხვა ადგილას, მაგალითად, დაბეჭდვაში

def calculate_area(length, width):
    area = length * width
    return area

length = 5
width = 10
result = calculate_area(length, width)
print("Rectangle area:", result)