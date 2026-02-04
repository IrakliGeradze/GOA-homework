def word():
    wor = input("enter a word: ")
    if wor == "":
        raise ValueError('word cannot be empty')
