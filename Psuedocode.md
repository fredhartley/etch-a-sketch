# etch-a-sketch

Psuedocode

Do we start with mobile first?

Create three page sections; header, main and footer. Each being their own element.
    Add a H1 called Etch-A-Sketch

Create a container (div) that will host all the content(squares and buttons)

Then create a gridContainer(div) within that container(div) that will hold all the grid divs

add buttons into the container(div). Which buttons? 
    
    — Add the ability to select a colour
    — Color mode that turns the onclick colours to whatever the selected colour is
    — a rainbow mode which turns the onclick colours into a random colour
    — Reset button that turns everything to its original colour
    — A slider that starts at 16 x 16 and has a max of 64 x 64 and a min of 1 x 1

Could we create classes for each mode?

JS

Grid generation
OnPage load generate a 16 x 16 grid (Use squared numbers)
Set CSS class for each div generated 

If the slider moves left, the number being used to square is reduced and when it is moved right the squared number is increased 

* Useful Stack overflow links *

https://stackoverflow.com/questions/73976125/using-a-button-to-display-different-texts-using-javascript

