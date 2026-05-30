import sqlite3

connection = sqlite3.connect("avatars.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Avatars(
    Username TEXT,
    Avatar BLOB
)
""")

with open("user1.jpg", "rb") as f:
    img1 = f.read()

with open("user2.jpg", "rb") as f:
    img2 = f.read()

with open("user3.jpg", "rb") as f:
    img3 = f.read()

with open("user4.jpg", "rb") as f:
    img4 = f.read()

cursor.execute("INSERT INTO Avatars VALUES (?, ?)", ("gio", img1))
cursor.execute("INSERT INTO Avatars VALUES (?, ?)", ("nika", img2))
cursor.execute("INSERT INTO Avatars VALUES (?, ?)", ("luka", img3))
cursor.execute("INSERT INTO Avatars VALUES (?, ?)", ("ana", img4))

cursor.execute("""
DELETE FROM Avatars
WHERE Username = 'nika'
""")

connection.commit()

cursor.execute("SELECT Username FROM Avatars")

users = cursor.fetchall()

for user in users:
    print(user[0])

connection.close()