from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton
import sys

class Window(QMainWindow):
    def __init__(self):
        super(QMainWindow, self).__init__()
        x_position = 200
        y_position = 200

        width = 900
        height = 700

        self.setGeometry(x_position, y_position, width, height) #geometriuli komfiguraciis moxdena - sheikmna fanjara
        # argumentebi : xPosition, yPosition

        self.setWindowTitle("First Project") #saxelis shecvla
        self.my_window()

    def my_window(self):
        self.myText = QLabel(self) #argumenti gadaecema romel fanjarashi iyos
        self.myText.setText("Hello World")
        self.myText.move(100, 65)

        #------GILAKI-------
        self.myButton = QPushButton(self)
        self.myButton.setText("Click Here")
        self.myButton.clicked.connect(self.handle_click)


        #-------STILI-------
        self.myButton.setStyleSheet("""
              background-color: white;
              border-style: outset;
              border-width: 1px;
              border-radius: 10px;
              border-color: black;
              font: bold 14px;
          """)
        
        # self.show() #gamochndes interface
        # sys.exit(self.exec_())

    def handle_click(self, something):
        self.myButton.setText("Clicked")
        self.myButton.adjustSize()


def main():
    app = QApplication(sys.argv)
    win = Window()
    win.show()
    sys.exit(app.exec_())

main()


def window():
    app = QApplication(sys.argv)
    win = QMainWindow()


window()

# arr = [2, 50, 15]

# print(sum(arr))

# total = 0
# for num in arr:
#     total += num
  

# print(total)