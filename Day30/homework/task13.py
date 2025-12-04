# 14) დაწერე ფუნქცია, რომელიც იღებს სტრიქონს და აბრუნებს მასში ხმოვნების (a, e, i, o, u) რაოდენობას. გამოიყენე ციკლი და if-else

def blah(word):
    xmovani = "aeiou"
    count = 0

    for words in word:
        if words in xmovani:
            count += 1
        else:
            pass
    return count

print(blah("Hello World")) 