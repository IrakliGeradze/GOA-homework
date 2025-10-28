total = 0
for num in range(4, 50):
    total += num

print(total)
#sequence - kodis tanmimdevrobit gashveba
#iteration - kodis mravaljer gashveba
#selection - gadawyveta tu romeli kodi gavushvat
#flowchart - diagramis saxit warmodgenili algoritmi
#pseudocode - programirebis enis sintaqsis msgavsi algoritmis chanaweri
#natural language - bunebrivi enit dawerili algoritmi

#DRY - dont repeat yourself

#for i in range(10):
#    print("Hello Guys")

#i = 0
#while i < 10:
#    print(i)
#    i = i +1

#print("Loop Ended")

#count = 0
#while 3 > 2:
#    count += 1
#    print("Universe is fair" + str(count))

#count = 10
#while (count > 3) or (count % 2 ==0):
#    print(count)
#    count += 1


pin_code = "5000"

code = input("Enter PinCode:")

while code != pin_code:
    code = input("Enter PinCode:")

print("Pin Correct")