import sqlite3

connection = sqlite3.connect("users.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Users(
    Username TEXT,
    Password TEXT,
    Balance INT
)
""")

cursor.execute("INSERT INTO Users VALUES ('giorgi', 'pass123', 1000)")
cursor.execute("INSERT INTO Users VALUES ('nika', 'qwerty', 750)")
cursor.execute("INSERT INTO Users VALUES ('luka', 'abc123', 1200)")
cursor.execute("INSERT INTO Users VALUES ('ana', 'mypassword', 900)")

cursor.execute("""
UPDATE Users
SET Password = 'newPassword123'
WHERE Username = 'nika'
""")

connection.commit()

cursor.execute("SELECT * FROM Users")

users = cursor.fetchall()

for user in users:
    print(user)

connection.close()