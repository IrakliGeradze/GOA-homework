#16) შექმენით ფუნქცია რომელიც მიიღებს რიცხვს (int) და სიტყვას (string) პარამეტრებად, ფუნქციამ მიღებული სიტყვა უნდა დაბეჭდოს იმდენჯერ რამდენიც არის რიცხვის არგუმენტი

def repeat_word(num, word):
    for i in range(num):
        print(word)

repeat_word(5, "Baro Gio")