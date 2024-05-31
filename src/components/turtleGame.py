import turtle
import random


Screen = turtle.Screen()
Screen.setup(width=800, height=600)
Screen.bgcolor("white")

# Draw Lines
def DrawLines():
    LineTurtle = turtle.Turtle()
    LineTurtle.speed(0)
    LineTurtle.penup()
    LineTurtle.hideturtle()
    LinePositions = []
    for _ in range(5):  # Reduced number of lines to 5
        XStart = random.randint(-390, 390)
        YStart = random.randint(-290, 290)
        XEnd = random.randint(-390, 390)
        YEnd = random.randint(-290, 290)
        LinePositions.extend([(XStart, YStart), (XEnd, YEnd)])
        LineTurtle.goto(XStart, YStart)
        LineTurtle.pendown()
        LineTurtle.goto(XEnd, YEnd)
        LineTurtle.penup()
    return LinePositions
  

# Setting the turtle
PlayerTurtle = turtle.Turtle()
PlayerTurtle.shape("turtle")  # Changing the shape back to turtle
PlayerTurtle.penup()
PlayerTurtle.goto(0, -250)
PlayerTurtle.speed(1)



# Setting the end point
EndTurtle = turtle.Turtle()
EndTurtle.shape("circle")
EndTurtle.color("green")
EndTurtle.penup()
EndTurtle.goto(0, 250)
EndTurtle.hideturtle()

# States
IDLE, MOVING, GAME_OVER = 'idle', 'moving', 'game_over'
State = IDLE

# Event handlers
def StartGame():
    global State
    if State == IDLE:
        State = MOVING
        PlayerTurtle.showturtle()
        EndTurtle.showturtle()

def MoveForward():
    if State == MOVING:
        PlayerTurtle.forward(10)
        CheckCollision()
        CheckWin()

def TurnLeft():
    if State == MOVING:
        PlayerTurtle.left(45)

def TurnRight():
    if State == MOVING:
        PlayerTurtle.right(45)

def CheckCollision():
    global State
    for X, Y in LinePositions:
        if PlayerTurtle.distance(X, Y) < 10:
            State = GAME_OVER
            PlayerTurtle.hideturtle()
            turtle.penup()
            turtle.goto(0, 0)
            turtle.color("red")
            turtle.write("Game Over", align="center", font=("Arial", 24, "normal"))

def CheckWin():
    global State
    if PlayerTurtle.distance(EndTurtle) < 15:
        State = GAME_OVER
        PlayerTurtle.hideturtle()
        turtle.penup()
        turtle.goto(0, 0)
        turtle.color("green")
        turtle.write("You Win!", align="center", font=("Arial", 24, "normal"))

# Key bindings
Screen.listen()
Screen.onkey(StartGame, "space")
Screen.onkey(MoveForward, "Up")
Screen.onkey(TurnLeft, "Left")
Screen.onkey(TurnRight, "Right")


LinePositions = DrawLines()

PlayerTurtle.hideturtle()
Screen.mainloop()