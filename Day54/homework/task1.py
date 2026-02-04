# 3) შექმენით კლასი Car, რომელსაც ექნება brand და speed. დაამატეთ მეთოდი accelerate(), რომელიც speed-ს გაზრდის 10-ით
class Car:
    def __init__(self, brand, speed):
        self.brand = brand
        self.speed = speed
    
    def accelerate(self):
        self.speed += 10
        print(self.speed)