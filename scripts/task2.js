/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Tanner 'Goose' Dillon";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = "2022";

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = currentYear

// Step 5: declare and instantiate a variable to hold the name of your picture
const myImage = "images/family.png";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src",myImage);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const myfavfood = ["Steak","Pizza"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = myfavfood

// Step 3: declare and instantiate a variable to hold another favorite food
const myfavfood2 = ["Churipanes"];

// Step 4: add the variable holding another favorite food to the favorite food array
myfavfood.push(myfavfood2)

// Step 5: repeat Step 2
document.querySelector("#food").textContent = myfavfood

// Step 6: remove the first element in the favorite foods array
myfavfood.shift()

// Step 7: repeat Step 2
document.querySelector("#food").textContent = myfavfood

// Step 8: remove the last element in the favorite foods array
myfavfood.pop()

// Step 7: repeat Step 2
document.querySelector("#food").textContent = myfavfood


