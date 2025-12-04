# def add_Numbers(start, end):
#     total = 0
#     for num in range(start, end):
#         total += num
#     return total

# print(add_Numbers(50, 150))




# def rect(length, width):
#     area = length * width
#     perimeter = (length + width) * 2
#     return (area, perimeter)

# print(rect(4, 3))



def hello(name="John Doe"):
    print("Welcome " + name)

print(hello())


#simravle iseti cvladi romelshic sheidzleba mravali mnishvnelobis shenaxva
#list simravle romelshc sheileba mravali elementis shenaxva


garden = ["pumpkin", "Beans", "Apple", "Rapes", "Carrot"]

fruit = ("Apple", "Rapes", "Peach")
print(fruit[3])
# fruit[3] = "Banana" #armushaobs



# garden = ["pumpkin", "Beans", "Apple", "Rapes", "Carrot"]




print(fruit.index[2])
print(fruit.count[1])

print(type(fruit))

fruit = ("Apple", "Rapes", "Peach", "Rapes")

def manual_count(sequence, target):
    count = 0
    for element in sequence:
        if element == target:
            count += 1
    return count

ajsfdas = manual_count(fruit, "Rapes")
print(ajsfdas)
