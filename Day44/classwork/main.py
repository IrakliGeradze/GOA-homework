arr = [5, 1, 50, 15, 2, 9]
for index in range(len(arr)):
    j = index
    while arr[j - 1] > arr[j] and j > 0:
        temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp
        j -= 1
    print(arr)