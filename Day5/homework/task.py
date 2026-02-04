def age(num):
    ag = int(input("enter your age: "))
    if ag < 0:
        raise ValueError('age must be positive')
    
