# balance = 1000
# last_transitions = [
#     # {'type': "deposit/withdraw", "amount": 1000, "balance": },
# ]

# def add_transaction(type,amount,balance):
#     last_transitions.append({
#         'type': type,
#         'amount': amount,
#         'balance': balance,
#     })

# def deposit(user_balance):
#     amount = 0
#     while True:
#         try:
#             amount = int(input("enter amount: "))
#             if amount < 0:
#                 raise ValueError('deposited money must be positive')
#         except ValueError:
#             print('Please use number')
#         else:
#             break
#     user_balance += amount
#     print("${amount} deposited successfully")
#     add_transaction("deposit", amount, user_balance)
#     return user_balance

# def withdraw(user_balance):
#     amount = 0
#     while True:
#         try:
#             amount = int(input("enter amount: "))
#             if amount < 0:
#                 raise ValueError('deposited money must be positive')
#             if amount > user_balance:
#                 raise ValueError('not enough money')
#         except ValueError:
#             print('Please use number')
#         else:
#             break
#     user_balance -= amount
#     print("${amount} withdrawn successfully")
#     add_transaction("withdraw", amount, user_balance)
#     return user_balance

# def keep_five(all_transitions):
#     while len(all_transitions) > 5:
#         all_transitions.pop(0)

# def check_transitions():
#     pass

# while True:
#     print('Welcome')
#     print('1. check balance')
#     print('2. deposit')
#     print('3. withdraw')
#     print('4. see your last 5 transitions')
#     print('5. exit')

#     while True:
#         try:
#             num = int(input('choose operation (1-5): '))
#         except ValueError:
#             print('please use number 1 through 5')
#             num = int(input('choose operation (1-5): '))
#         else:
#             break
#     if num == 1:
#         print("your balance is {balance}")
#     elif num == 2:
#         new_balance = deposit(balance)
#         balance = new_balance
#         keep_five(last_transitions)
#     elif num == 3:
#         new_balance = withdraw(balance)
#         balance = new_balance
#         keep_five(last_transitions)
#     elif num == 4:
#         print(last_transitions)
#     elif num == 5:
#         print('bye')



# higher order function magali ierarqiis funqcia aris iseti funqcia romelic aris

# def greet():
#     return "Hello"

# def goodbye():
#     return "Bye"

# def higher_order(func):
#     return func(func)

# print(higher_order(1,2))
# print(higher_order(greet()))
# print(higher_order(goodbye()))


# wminda aris funqcia romelic ar icvleba magalitad
# def ragac():
#   return "hello"
# arawminda aris romelsac input aqvs da rameti icvleba

# --------------------------------


map, filter

#map - siis yvela elements gadauvlis da rac funqciashi gvewereba magas gaaketebs tito elementistvis(gvimartivebs saqmes)
numbers = [1,52,13,4,51,36,74,8,19,10]
def double(x):
    return x * 10

print(list(map(double, numbers)))

def manual_map(func, arr):
    result = []
    for element in arr:
        result.append(func(element))
    return result

print(manual_map(double, numbers))


#filter - gafiltravs yvelafers, titqmis igive rogoricaa map
def is_even(num):
    return num %  2 == 0

filter(is_even, numbers)
print(list(filter(is_even, numbers)))

def manual_filter(func, arr):
    result = []
    for element in arr:
        if func(element):
            result.append(element)
    return result

print(manual_filter(is_even, numbers))


#lambda - funqcia, aketebs martiv magalitebs igivea rac funqciis sheqmna magram ufro martivia da swrafi

def double(num):
    return num * 2

double = lambda num1, num2: num1 + num2(15, 15)

print(list(map(lambda x: x * 2, numbers)))
