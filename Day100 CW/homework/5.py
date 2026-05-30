import sqlite3

connection = sqlite3.connect("notes.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Notes(
    Title TEXT,
    Content TEXT
)
""")

cursor.execute("INSERT INTO Notes VALUES ('Shopping', 'Buy milk and bread')")
cursor.execute("INSERT INTO Notes VALUES ('Homework', 'Finish Python exercises')")
cursor.execute("INSERT INTO Notes VALUES ('Workout', 'Go to the gym at 6 PM')")

cursor.execute("""
UPDATE Notes
SET Content = 'Finish Python and SQLite exercises'
WHERE Title = 'Homework'
""")

connection.commit()

cursor.execute("SELECT * FROM Notes")

notes = cursor.fetchall()

for note in notes:
    print(note)

connection.close()