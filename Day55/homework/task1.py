# 3) შექმენით კლასი UserCounter, რომელსაც ექნება class variable total_users. დაამატეთ classmethod create_user(), რომელიც გაზრდის total_users-ს 1-ით
class UserCounter:
    total_users = 0
    @classmethod
    def create_user(cls):
        cls.total_users += 1
        print(cls.total_users)