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



# def hello(name="John Doe"):
#     print("Welcome " + name)

# print(hello())


#simravle iseti cvladi romelshic sheidzleba mravali mnishvnelobis shenaxva
#list simravle romelshc sheileba mravali elementis shenaxva


# garden = ["pumpkin", "Beans", "Apple", "Rapes", "Carrot"]

# fruit = ("Apple", "Rapes", "Peach")
# print(fruit[3])
# fruit[3] = "Banana" #armushaobs



# garden = ["pumpkin", "Beans", "Apple", "Rapes", "Carrot"]


# def manual_count(sequence, target):
#     count = 0
#     for element in sequence:
#         if element == target:
#             count += 1
#     return count

# ajsfdas = manual_count(fruit, "Rapes")
# print(ajsfdas)


# print(fruit.index[2])
# print(fruit.count[1])

# print(type(fruit))

# fruit = ("Vashli", "Yurdzeni", "Atami", "Msxali")

# def manual_index(sequence, target):
#     for index in range(len(sequence)):
#         if sequence[index] == target:
#             return index
#     return -1

# print(manual_index(fruit, "Vashli"))

#unpacking - simravlis elementebis cal calke cvladebshi shenaxva,
#am dros tamnimdevrulad xdeba mnishvnelobebis minicheba cvladebze
#pirveli el sheinaxeba pirvelshi, da ase shemdeg

#*others - rest operation romelic unpacking dros zedmet 
#mnishvnelobebs romelbistavac cvladebi ar aris sheinaxavs ertad bolo *others cvladshi

# score = (15, 10, 18, 25)
# pirveli, meore, *others = score
# print(min(score))
# print(max(score))
# elements = {"A", "B", "C", "D"}



# nums = {1, 2, 2, 3, 4, 4, 4, 5}

# nums.add(5)
# nums.remove(3)

# print(nums)

# nums1 = {1, 3, 5, 7, 8}
# nums2 = {1, 2, 7}

# print(nums1.union(nums2)) #gaertianebashi
# print(nums1.intersection(nums2)) #tanakveta
# print(nums1.difference(nums2))
# print(nums1.symmetric_difference(nums2)) #gaertianeba - tanakveta



#min, max, len, isnumeric, sort, sorted

# data = [33, 30, 55, 501, 5, 3, 1, 500]
# data.sort() # daalagebs 
# print(sorted(data)) # daisorteba ;(
# print("5saf5asff".isnumeric()) #tu ricxviti tu weria anu ricxvi -> stringia mogcems true - s


# data = [33, 30, 55, 501, 5, 3, 1, 500]
# data_sort = data.sort()
# print(data_sort)
# data_sorted = sorted(data)
# print(data_sorted)




# sentence = "The dog has climbed over the tree"

# print(sentence.split())
# words = ['The', 'dog', 'has', 'climbed', 'over', 'the', 'tree']
# words = "AAA B CCC B DDD B".split(" B ") moashorebs B s

# sentence = " ".join(words)
# print(sentence)

# word = "BLA BLA BLA"
#new_word = word.replace("LA", "LU") #chaanacvlebs BLA -dan LA -s LU ti


#replace - chaanacvlebs 
#split - yofs sityvebs variable.split() - dayofs calcalke ert did strings
#join - ert xazzshi aqcevs am gayofils an sias " ".join(variable)


sityva = "male axal proeqts elodet !"   #yofs sityvebs variable.split() - dayofs calcalke ert did strings
print(sityva.split())
sityva1 = "male"
print(sityva1.split())

sentence = " ".join(sityva)
print(sentence)
sentence1 = " ".join(sityva1)
print(sentence1)  #ert xazzshi aqcevs am gayofils strings  " ".join(variable)

word = "gamarjoba"
new_word = word.replace("amarjoba", "agimarjos")
word1 = "gamarjobaaaa"
new_word = word1.replace("amarjobaaaa", "agimarjossss") #chaanacvlebs 


any_ragaca = "      oeee dawere nomeri! aha brat damireke droze gelodebi:  55555555      "
amochruli = any_ragaca.rstrip("55555555")  #stripi gaglejva, gafxrewva, dafertxva, galaxva - gamoidzaxeba stringze da ramis moshoreba tu gvinda moashorebs 