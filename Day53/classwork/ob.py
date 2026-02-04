# # Objected Oriented Programming

# class Fighter:
#     def __init__(self, name, health, damage, speed):
#         self.name = name
#         self.health = health
#         self.damage = damage
#         self.speed = speed
#     def damageMax(self):
#         self.damage += 30
#     def healthMax(self):
#         self.health += 50
#     def speedMax(self):
#         self.speed += 15

# class Medic:
#     def damageMax(self):
#         print("Power Maxed")
#     def healthMax(self):
#         print("Health Maxed")
#     def speedMax(self):
#         print("Speed Maxed")



# ninja = Fighter("Ninga", 100, 40, 25)

# nickHers = Fighter("NickHers?", 100, 65, 40)

# statistics = Medic()

# print(ninja.name)
# print(ninja.health)
# print(ninja.damage)
# print(ninja.speed)

# print(nickHers.name)
# print(nickHers.health)
# print(nickHers.damage)
# print(nickHers.speed)




# # ninja.healt = 0
# # ninja.name = "Ninga"
# # ninja.damage = 40
# # ninja.speed = 25

# # nickHers.healt = 0
# # nickHers.name = "NickHers?"
# # nickHers.damage = 65
# # nickHers.speed = 40

# klasi zogadi cnebaa romelic gamoiyeneba ertgvari elementebis shesaqmnelad 
# class Gamer:
#     count = 0
#     def __init__(self, game, time_played, amount):
#         self.favourite_game = game
#         self.hours = time_played
#         Gamer.count += 1
#         self.money = amount


#     def play(self):
#         self.hours += 1

#     @classmethod
#     def count_gamers(cls):
#         print(cls.count)


# #instanciebi
# irakli = Gamer("RD2", 150, 500)
# zurab = Gamer("Warband", 300, 150)
# luka = Gamer("Roblox", 15000, 400)
# dachi = Gamer("Minecraft", 0.1, 15000000000)

# Gamer.count_gamers()





# zurab.new_skin = "unlocked"
# zurab.favourite_game = "RD2"
# irakli.favourite_game = "Roblox"
# luka.favourite_game = "MB Warband"

class Fighter:
    def __init__(self, health, damage, speed):
        self.health = health
        self.damage = damage
        self.speed = speed

class Archer(Fighter):
    def __init__(self, health, damage, speed, range, reload):
        super().__init__(health, damage, speed)
        self.range = range
        self.reload = reload

wizzard = Archer(30, 50, 15, 100, 15)
zurabi = Archer(1500, 15000, 15000, 15000, 15000)
lanchava = Archer(0, 0, 0, 0, 0)  #Too noob

print(zurabi.health)
print(zurabi.damage)
print(zurabi.speed)
print(zurabi.range)
print(zurabi.reload)

print(lanchava.health)
print(lanchava.damage)
print(lanchava.speed)
print(lanchava.range)
print(lanchava.reload)

print(wizzard.health)
print(wizzard.damage)
print(wizzard.speed)
print(wizzard.range)
print(wizzard.reload)
