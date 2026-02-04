# 5) შექმენით კლასი Counter, რომელსაც ექნება class variable count. ყოველ ახალ ობიექტზე count უნდა გაიზარდოს 1-ით
class Counter():
    count = 0
    def __init__(self):
        Counter.count += 1
        print(Counter.count)