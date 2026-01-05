# 10) შექმენით ფაილი "numbers.txt" და ჩაწერეთ მასში რამდენიმე რიცხვი (თითო ხაზზე ერთი). შემდეგ წაიკითხეთ ფაილი, გადააკეთეთ თითოეული ხაზი int-ად და დაბეჭდეთ მათი ჯამი. გამოიყენეთ try და except ValueError არასწორი მონაცემების დასამუშავებლად

try:
    with open("numbers.txt", "r") as file:
        lines = file.readlines()
        total = 0
        for line in lines:
            num = int(line.strip())
            total += num
        print("Total:", total)
except FileNotFoundError:
    print("File not found.")
except ValueError:
    print("Invalid data in the file.")