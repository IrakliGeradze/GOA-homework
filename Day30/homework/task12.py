# 13) დაწერე ფუნქცია, რომელიც იღებს რიცხვს 'n' და აბრუნებს სიას 1-დან 'n'-ის ჩათვლით ყველა ლუწი რიცხვით. გამოიყენე for ციკლი და if-else

def even_numbers(n):
    evens = []
    for num in range(1, n + 1):
        if num % 2 == 0:
            evens.append(num)
    return evens

print(even_numbers(10))