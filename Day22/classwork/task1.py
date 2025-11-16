pincode_data = ["1234", "1245", "5555", "1555"]

user_pincode = input("Enter your pincode: ")
pincode_right = False
for pin in user_pincode:
    print("Pin Correct!")
    pincode_right = True
else:
    if pincode_right != False:
        print("Pin Uncorrect")