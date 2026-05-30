import sqlite3

connection = sqlite3.connect("contacts.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Contacts(
    Name TEXT,
    Phone TEXT,
    Email TEXT
)
""")

cursor.execute("INSERT INTO Contacts VALUES ('Giorgi', '555111111', 'giorgi@gmail.com')")
cursor.execute("INSERT INTO Contacts VALUES ('Nika', '555222222', 'nika@gmail.com')")
cursor.execute("INSERT INTO Contacts VALUES ('Ana', '555333333', 'ana@gmail.com')")
cursor.execute("INSERT INTO Contacts VALUES ('Luka', '555444444', 'luka@gmail.com')")
cursor.execute("INSERT INTO Contacts VALUES ('Mariam', '555555555', 'mariam@gmail.com')")

cursor.execute("""
UPDATE Contacts
SET Phone = '599123456'
WHERE Name = 'Nika'
""")

cursor.execute("""
DELETE FROM Contacts
WHERE Name = 'Ana'
""")

connection.commit()

cursor.execute("SELECT * FROM Contacts")

contacts = cursor.fetchall()

for contact in contacts:
    print(contact)

connection.close()