// SECTION 1
// 1. DRY stands for Dont Repeat Yourself. It keeps our code clean and easy to read. 
// Functions and if-else statements used properly can help keep our code dry. 
// 2. Const is a constant variable that wont be changed. let is a variable that is only 
// accessable within its scope. var is a variable that is accessable in and outside of its scope.

// SECTION 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
const g = 0
// 1. a < b
// 2. c > d
// 3. 'name' == 'name'
// 4. a < b < c
// 5. a == a != d
// 6. e != 'Kevin'
// 7. 48 != '48'
// 8. f == false
// ANSWER 1. I used const so that the variable would remain constant.
// ANSWER 2. If I dont use const it still logs 0.
// ANSWER 3. It creates an error marked at the 10.

console.log(g);

// SECTION 3
// 1. Yes it is an infinite loop because it will always evaluate to to true.
// 2. It is not infinite, it will log an error. 
// 3. 

let letters = "A";
let i = 0;
// Starts a while loop that will run as long as i is less than 20.
while (i < 20) {
    // adds a string "A" onto the sum of adding "A" to "A"
    letters += "A";
    // adds 1 to the sum of adding 1 to i
	i++;
}
// this will log A nineteen times in a string
console.log(letters);
// It logged what I expected.

// SECTION 4
// 1. for loops are better used when you know how many iterations you want but over all
// they both can be used at any time.
// 2. -The first part of the control panel is: the variable that is being declared.
//    -The second part of the control panel is: the condition that is defined for the loop to run.
//    -THe third part of the control panel is: what will be executed after the loop runs.
// 3. 
for (i = 0; i <= 999; i++) {
    console.log(i);
}
// 4. 
for (i = 999; i >= 0; i--) {
    console.log(i);

}
// 5. 
for (i = 1; i <= 10; i++) {
    console.log("The value of i is: " + i + " of 10");
}
// 6.
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (index = 0; index < StarWars.length; index++) {
    console.log(StarWars[index]);
}
