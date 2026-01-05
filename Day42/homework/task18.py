# 19) შექმენით პროგრამა, რომელიც ფაილში "log.txt" ჩაწერს შეცდომის შეტყობინებას მაშინ, როცა try ბლოკში შეცდომა მოხდება. გამოიყენეთ except და with

try:
    with open("log.txt", "w") as file:
        file.write("An error occurred")
except:
    with open("log.txt", "w") as file:
        file.write(str)