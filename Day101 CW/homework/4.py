import sqlite3

connection = sqlite3.connect("accounts.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Accounts(
    Username TEXT,
    Email TEXT,
    Balance INT
)
""")

cursor.execute("INSERT INTO Accounts VALUES ('giorgi', 'giorgi@gmail.com', 1000)")
cursor.execute("INSERT INTO Accounts VALUES ('nika', 'nika@gmail.com', 1500)")
cursor.execute("INSERT INTO Accounts VALUES ('ana', 'ana@gmail.com', 2000)")

cursor.execute("""
UPDATE Accounts
SET Balance = Balance + 500
WHERE Username = 'nika'
""")

connection.commit()

cursor.execute("SELECT * FROM Accounts")

accounts = cursor.fetchall()

for account in accounts:
    print(account)

connection.close()