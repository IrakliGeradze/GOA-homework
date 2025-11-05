pin = "1234"
attempts = 3
pin_code = ""

while attempts > 0:
    pin_code = input("Enter pin code: ")

    if pin_code == pin:
        print("Access Granted")
        break

    else:
        attempts -= 1
        print("Wrong, you have " + str(attempts) + " " + "attempts left")

if attempts == 0 and pin_code != pin:
    print("Access Denied")
