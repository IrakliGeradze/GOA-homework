# 4) შექმენით კლასი BankAccount, რომელსაც ექნება protected ატრიბუტი _balance. დაამატეთ მეთოდი show_balance(), რომელიც დაბეჭდავს ბალანსს
class BankAccount:
    def __init__(self, balance):
        self._balance = balance
    
    def show_balance(self):
        print(self._balance)