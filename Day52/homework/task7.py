# 9) შექმენით ფუნქცია, რომელიც იღებს 'args'-ით რიცხვებს და აბრუნებს მათ მაქსიმუმს და მინიმუმს

def ragac(*args):
    return max(args) and min(args)

print(ragac(1, 5))