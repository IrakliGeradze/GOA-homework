# 12) გამოიყენეთ with context manager ფაილ "info.txt"-ზე ჩასაწერად. ჩაწერეთ მინიმუმ 3 სტრიქონი ტექსტი და დარწმუნდით, რომ ფაილი ავტომატურად იხურება

with open("info.txt", "w") as file:
    file.write("This is line first")
    file.write("This is line scond")
    file.write("This is line third")
print(file)
print(file.closed)