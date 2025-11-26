from turtle import *


def draw_square(x, y):

    penup()
    goto(x, y)
    pendown()

    forward(200)
    left(90)
    forward(200)
    left(90)
    forward(200)
    left(90)
    forward(200)
    left(90)

draw_square(150, 100)
draw_square(50, 50)
draw_square(10, 5)
draw_square(-40, -20)





exitonclick()