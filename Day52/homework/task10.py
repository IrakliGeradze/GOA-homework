# 12) შექმენით კლასი BankAccount, რომელსაც ექნება balance. დაამატეთ მეთოდი deposit(amount), რომელიც balance-ს თანხას დაუმატებს

class BankAccout:
    def __init__(self, balance):
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    
