# 12) დაწერე ფუნქცია, რომელიც იღებს სიტყვების სიას და აბრუნებს სიის ყველაზე გრძელ სიტყვას. გამოიყენე ციკლი და 'len()' შედარებისთვის

world = ["Stfu", "GOA", "Irakli", "Jorjika"]
def ragac(world):
    longest = " "
    for words in world:
        if len(world) > len(longest):
            longest = world
    return longest
