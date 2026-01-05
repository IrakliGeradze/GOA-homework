# File Handling


#.open() xsnis fails -
#.read() wakitxvistvis
#.write() daweristvis
#.close() vxuravt fails -

# r - wakitxvis
# w - weris
# a - damatebis rejimi
# x - failis sheqmna
# r+ - wera kitxvis rejimi

# data = open("data.txt", "w")

# print(data.write("Gamarjoba Gamarjoba"))


# data.close()

#Error handling 

#programirebashi arsebobs ori tipis xarvezi, error da bug
#error shecdoma romelic aferxebs kodis gashvebas
#bug logikuri xarvezi romelic kodis gashvebas ar ushlis xels, magram kodi ar gvadzlevs sasurvel shedegs

#error - arsebobs dziritadi da exception (gamonaklisi)
#SystemError - pitonis interpreteris shida problema
#RecurssionError - gadaacharbet rekursiis limits
#MemoryError - mexsierebis ukmarisobis problema

# Exceptions (gamonaklisebi) - standartuli errorebi - romlebtanac mobyroba shesadzlebelia try-except blokis gamoyenebit

# SyntaxError: - weriti shecdoma
# TypeError: - roca davalebas araswor monacemta tipebs shoris axden - "Ika" + 2
# IndexError: - is pozicia romelsac vcdilob mivwvde ar arsebobs simravleshi
# NameError: - cvladis saxeli ro gvereva magalitad iseticvladis gamodzaxeba romelic ar arsebobs cvladi = ["Hello"] da cvld s ro viyenebt
# ValueError: - xdeba mashin tu funqcias gadavecit swori tipi magram araswori mnishvneloba 
# KeyError: - xdeba mashin roca konkretuli gasagebi araris siashi = sia = [5, 15, 50] da vedzebt 20
# FileNotFound: - fails rom ver ipovis kompiuteri rogorc dagvemarta wegan
# ZeroDivisionError: - nulze gamravlebis errori 5 * 0

# try:
#     open("christmas.present")
#     2 + "2"
# except TypeError:
#     print("We ant add integers with strings")
# except FileNotFoundError:
#     print("File Not Found")
# except SyntaxError:
#     print("Syntax Error")
# except IndexError:
#     print("There is Index Error")
# Exceptions (gamonaklisebi) - standartuli errorebi - romlebtanac mobyroba shesadzlebelia try-except blokis gamoyenebit
#error shecdoma romelic aferxebs kodis gashvebas
#bug logikuri xarvezi romelic kodis gashvebas ar ushlis xels, magram kodi ar gvadzlevs sasurvel shedegs

# errors = {
#     "Irakli": "Top speed at writing classworks",
#     "Zurab": "The most projects completed"
# }
# print(errors["Luka"])

#Context Manager - koncefcia failebtan usafrtxod mushaobis
# with as kitxulobs rogorc fails
# da masshi shegvilia kargi da bevri ragaceebi chavamatot

# file = open("data.txt", "r+")

with open("data.txt", "r+") as file:
    lines = file.readlines()
    for line in lines:
        line = line 
        print(line, end=" ")