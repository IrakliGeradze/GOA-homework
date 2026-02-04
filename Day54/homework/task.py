# 2) შექმენით კლასი Animal, რომელსაც ექნება ატრიბუტები name და age. დაამატეთ მეთოდი speak(), რომელიც დაბეჭდავს "ცხოველი ხმას გამოსცემს"
class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def speak(self):
        print("ცხოველი ხმას გამოსცემს")