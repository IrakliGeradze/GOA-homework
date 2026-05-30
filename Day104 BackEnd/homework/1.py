import sqlite3

connection = sqlite3.connect("images.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Images(
    Title TEXT,
    Photo BLOB
)
""")

with open("image1.jpg", "rb") as file:
    img1 = file.read()

with open("image2.jpg", "rb") as file:
    img2 = file.read()

cursor.execute("INSERT INTO Images VALUES (?, ?)", ("First Image", img1))
cursor.execute("INSERT INTO Images VALUES (?, ?)", ("Second Image", img2))

connection.commit()

cursor.execute("SELECT * FROM Images")
images = cursor.fetchall()

for image in images:
    print(image[0], len(image[1]))

connection.close()