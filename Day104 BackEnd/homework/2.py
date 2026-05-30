import sqlite3

connection = sqlite3.connect("gallery.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Gallery(
    ImageName TEXT,
    ImageData BLOB
)
""")

with open("img1.jpg", "rb") as f:
    img1 = f.read()

with open("img2.jpg", "rb") as f:
    img2 = f.read()

with open("img3.jpg", "rb") as f:
    img3 = f.read()

cursor.execute("INSERT INTO Gallery VALUES (?, ?)", ("Image1", img1))
cursor.execute("INSERT INTO Gallery VALUES (?, ?)", ("Image2", img2))
cursor.execute("INSERT INTO Gallery VALUES (?, ?)", ("Image3", img3))

with open("img2_new.jpg", "rb") as f:
    new_img2 = f.read()

cursor.execute("""
UPDATE Gallery
SET ImageData = ?
WHERE ImageName = 'Image2'
""", (new_img2,))

connection.commit()

cursor.execute("SELECT * FROM Gallery")
images = cursor.fetchall()

print("Total images in database:", len(images))

connection.close()