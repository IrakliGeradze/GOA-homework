from turtle import *


#we want to paint a house

#step 1: draw a square
speed(20)
width(7)
color("black")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door
begin_fill()
forward(70)
color("black")
left(90)
forward(120)   #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()
#end of door
penup()
goto(200, 200)
pendown()

color("black")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
#end of roof

begin_fill()
color("black")
left(30)
forward(30)
left(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()
#end of single window

right(90)
forward(70)
right(90)
forward(200)
#end 1

begin_fill()
right(90)
forward(30)
right(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
end_fill()
#end of second window

right(90)
forward(140)
color("green")
width(10)
left(90)
forward(500)
right(90)
forward(5)
right(90)
forward(500)
right(90)
forward(10)
left(90)
forward(650)
left(90)
forward(10)
left(90)
forward(650)
left(90)
forward(10)
right(90)
forward(500)
right(90)
forward(10)
right(90)
forward(950)
#end of grass

right(90)
forward(20)
color("white")
forward(300)
#sun
begin_fill()
color("yellow")
left(90)
forward(70)
right(90)
forward(70)
right(90)
forward(70)
right(90)
forward(70)
end_fill()


exitonclick()