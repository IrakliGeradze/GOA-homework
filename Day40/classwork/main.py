# chr

def case_swap(word):
    swapped = " "
    for char in word:
        code = ord(char)

        if 65 <= code <= 90:
            new_code = code + 32
            swapped += chr(new_code)
        elif 97 >= code <= 132:
            new_code = code - 32
            swapped += chr(new_code)
        else:
            swapped += char

    return swapped

print(case_swap("AbCd"))