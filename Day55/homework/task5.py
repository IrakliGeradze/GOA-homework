# 5) შექმენით კლასი SecureData, რომელსაც ექნება private ატრიბუტი __password. დაამატეთ მეთოდი check_password(pwd), რომელიც შეამოწმებს სწორია თუ არა
class SecureData():
    def __init__(self, password):
        self.password = password

    def check_password(self, pwd):
        if self.password == pwd:
            return True
        else:
            return False
