import sqlite3


connection = sqlite3.connect("students.db")

cursor = connection.cursor()


cursor.execute("""
CREATE TABLE IF NOT EXISTS Students(
    Name TEXT,
    Email TEXT,
    Score INT
)
""")

cursor.execute("INSERT INTO Students VALUES ('Giorgi', 'giorgi@gmail.com', 95)")
cursor.execute("INSERT INTO Students VALUES ('Nika', 'nika@gmail.com', 88)")
cursor.execute("INSERT INTO Students VALUES ('Luka', 'luka@gmail.com', 91)")
cursor.execute("INSERT INTO Students VALUES ('Ana', 'ana@gmail.com', 99)")
cursor.execute("INSERT INTO Students VALUES ('Mariam', 'mariam@gmail.com', 85)")


connection.commit()

cursor.execute("SELECT * FROM Students")

students = cursor.fetchall()

for student in students:
    print(student)

connection.close()