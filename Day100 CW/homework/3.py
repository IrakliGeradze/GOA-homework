import sqlite3

connection = sqlite3.connect("shop.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Products(
    ProductName TEXT,
    Price INT,
    Quantity INT
)
""")

cursor.execute("INSERT INTO Products VALUES ('Laptop', 2500, 10)")
cursor.execute("INSERT INTO Products VALUES ('Mouse', 50, 30)")
cursor.execute("INSERT INTO Products VALUES ('Keyboard', 120, 15)")
cursor.execute("INSERT INTO Products VALUES ('Monitor', 700, 8)")
cursor.execute("INSERT INTO Products VALUES ('Headphones', 200, 20)")

cursor.execute("""
DELETE FROM Products
WHERE ProductName = 'Mouse'
""")

connection.commit()

cursor.execute("SELECT * FROM Products")

products = cursor.fetchall()

for product in products:
    print(product)

connection.close()