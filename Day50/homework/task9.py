words = ['ant', 'elephant', 'dog', 'giraffe']
def word():
    if len(word) >= 5:
        return word
print(list(filter(word, words)))