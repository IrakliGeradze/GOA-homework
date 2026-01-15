# events = ["raime", "sia", "raime"]

# try:
#     index = int(input())
# except IndexError:
#     print("given index is not avaliable in the list")
# except ValueError:
#     print("dont use symbols")
# else:
#     print("Event successfuly found")
# finally:
#     print("Code block of finally, will execute")

# try blokshi iwereba is kodi romelshic echvi gvaqvs rom sheileba moxdes error
# except blokshi vutitebt errors, iwereba is davaleba romelic unda shesruldes tu tryblokshi agmochnda error
# else bloki eshveba mxolod da mxolod mashin rodesac try bloki gaeshva ushecdomod
# finally aq mocemuli kodi eshveba yvela shemtxvevashi


# sentence = "9"
# sentences = []

# while sentence != "":
#     sentence = input('enter sentence: ')
#     sentences.append(sentence)
# sentences.pop()

# file = "sentences.txt"

# with open(file, "w", encoding="utf-8") as file:
#     for sentence in sentences:
#         file.write(sentence + "\n")

# with open(file, "r", encoding="utf-8") as file:
#     lines = file.readlines()
#     count = []
#     for line in lines:
#         line = line.strip()
#         words = line.split(' ')
#         count.append(len(words))
#     longest = max(count)
#     longest_index = count.index(longest)
#     longest_line = lines[longest_index]


# შექმენით პროგრამა, რომელიც:
# •    კლავიატურიდან მიიღებს ტექსტს (მინიმუმ 3 წინადადება)
# •    შეინახავს ამ ტექსტს input.txt ფაილში
# •    წაიკითხავს ფაილს და შეასრულებს შემდეგ ოპერაციებს:
# დათვლის ხმოვანი ასოების რაოდენობას (a, e, i, o, u)
# იპოვის ყველაზე გრძელ სიტყვას
# შეცვლის ყველა ციფრს "*" სიმბოლოთი
# •    დამუშავებული ტექსტი შეინახოს output.txt ფაილში
# •    კონსოლში გამოიტანოს სტატისტიკა: ხმოვნების რაოდენობა და ყველაზე გრძელი სიტყვა


sentence = "9"
sentences = []

while sentence != "":
    sentence = input('enter sentence: ')
    sentences.append(sentence)
sentences.pop()

file = "input.txt"

with open(file, "w", encoding="utf-8") as f:
    for sentence in sentences:
        f.write(sentence + "\n")

with open(file, "r", encoding="utf-8") as file:
    lines = file.readlines()
    count = []
    for line in lines:
        line = line.strip()
        words = line.split(' ')
        count.append(len(words))
    longest = max(count)
    longest_index = count.index(longest)
    longest_line = lines[longest_index]
    print(longest_line)
    vowels = "aeiou"
    vowel_count = {}
    for vowel in vowels:
        vowel_count[vowel] = 0
    for line in lines:
        for char in line:
            if char.lower() in vowels:
                vowel_count[char.lower()] += 1
    print(vowel_count)
    for line in lines:
        new_line = ""
        for char in line:
            if char.isdigit():
                new_line += "*"
            else:
                new_line += char
        print(new_line)

file = "output.txt"

with open(file, "w", encoding="utf-8") as file:
    for sentence in sentences:
        file.write(sentence + "\n")
