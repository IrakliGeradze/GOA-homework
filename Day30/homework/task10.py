# 11) დაწერე ფუნქცია, რომელიც იღებს რიცხვს და აბრუნებს True თუ ის უარყოფითია, False თუ არა

def isev_ragaca(first, second):
    if first and second < 0:
        return True
    else:
        return False
    

print(isev_ragaca(5, 10))