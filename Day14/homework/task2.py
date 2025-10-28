pin_code = "1928"
attempts = 0

code = input("Enter PinCode:")

while code != pin_code:
    code = input("Enter PinCode:")
    attempts += 1

print("Attempts: ", attempts)
print("Pin Correct")
