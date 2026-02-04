# 4) შექმენით კლასი User, რომელსაც ექნება username და email. დაამატეთ მეთოდი info(), რომელიც დაბეჭდავს მომხმარებლის მონაცემებს ერთ ხაზზე

class User():
    def __init__(self, username, email):
        self.username = username
        self.email = email
    
    def info(self):
        print(f"მომხმარებელი: {self.username}\nმეილი: {self.email}")