#13) შექმენით სტრინგი და შემოიტანეთ საძიებელი სიტყვა input-ით. თუ სიტყვა მოიძებნება find-ით, დაბეჭდეთ პოზიცია, სხვა შემთხვევაში კი დაბეჭდეთ word not found

text = "Es aris sityvaa davai gameicani aba"

word = input("Enter a word to search: ")

position = text.find(word)

if position != -1:
    print("Word found at position:", position)
else:
    print("word not found")