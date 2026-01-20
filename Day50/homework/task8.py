nums = [5, 8, 11, 14, 17]
def iss(x):
    if x > 10:
        return x
print(list(filter(iss, nums)))