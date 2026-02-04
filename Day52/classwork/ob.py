# Objected Oriented Programming

class Fighter:
    def __init__(self, name, health, damage, speed):
        self.name = name
        self.health = health
        self.damage = damage
        self.speed = speed
    def damageMax(self):
        self.damage += 30
    def healthMax(self):
        self.health += 50
    def speedMax(self):
        self.speed += 15

class Medic:
    def damageMax(self):
        print("Power Maxed")
    def healthMax(self):
        print("Health Maxed")
    def speedMax(self):
        print("Speed Maxed")



ninja = Fighter("Ninga", 100, 40, 25)

nickHers = Fighter("NickHers?", 100, 65, 40)

statistics = Medic()

print(ninja.name)
print(ninja.health)
print(ninja.damage)
print(ninja.speed)

print(nickHers.name)
print(nickHers.health)
print(nickHers.damage)
print(nickHers.speed)




# ninja.healt = 0
# ninja.name = "Ninga"
# ninja.damage = 40
# ninja.speed = 25

# nickHers.healt = 0
# nickHers.name = "NickHers?"
# nickHers.damage = 65
# nickHers.speed = 40
