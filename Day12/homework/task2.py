temperature = 30
cloudy = True
wind = 15
its_raining = False

task1 = temperature > 28 and not (wind > 10) #true
print(task1)

task2 = wind > 5 or its_raining #true
print(task2)

task3 = cloudy and not (its_raining) #true
print(task3)

task4 = temperature < 10 or its_raining #false
print(task4)