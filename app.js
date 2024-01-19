// ------------------ Chapter 21 (Changing Case) -----------------------

// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.
var allLower = userInput.toLowerCase();

// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.
var x = "HELLO";
x = x.toLowerCase();

// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.
var y = "hello";
y = y.toUpperCase();

// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.
var a = "HELLO";
var b = a.toLowerCase();

// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.
var c = ["HELLO"];
var d = c[0].toLowerCase();

// 6. Display in an alert the upper-case version of the string
// represented by a variable.
var e = "hello";
alert(e.toUpperCase());

// 7. var cityName = “kaRacHi”; Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase.
var cityName = "kaRacHi";
cityName = cityName.slice(0, 1).toUpperCase() + cityName.slice(1).toLowerCase();

// --------------------  Chapter 22 - 25 (Strings)  ------------------------------------

// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.
var sameWords = "captain";
var slicedWord = sameWords.slice(1, 3);

// 2. The number of characters in the string will be assigned to the variable.
var str = "Hello";
var numCharacters = str.length;

// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.
var animal = "elephant";
var seg = animal.slice(2, 6);

// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.
var str = "Hello";
var lenOfStr = str.length;

// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.
var str = "Owais";
var lenOfStr = str.length;
var slicedWord = str.slice(1, str.length - 3);

// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx? => 3

// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself. => 11

// 8. Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.
var indx = text.lastIndexOf("go");

// 9. Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.
if (str.length > indexNum) {
}
// 10. In this string "abcde", what character is at index 2? (Use charAt)
var abc = "abcde";
var charAt = abc.charAt(2);

// 11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.
var cha = text.charAt(9);

// 12. Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.
var x = str.charAt(str.length - 1);

// 13. Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.
var cha = input.charAt(4);

// 14. Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.
if (str.charAt(2) == "c") {
}

// 15. Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand. In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.
var reply = "no, not now, maybe later";
// Declare an array to store characters
var charArray = [];

// Iterate through each character of the string and assign it to the array
for (var i = 0; i < reply.length; i++) {
  charArray[i] = reply.charAt(i);
}

// Find and replace the first instance of "no" with "yes" in the string
var revisedReply = reply.replace("no", "yes");

// 16. In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.
// Assuming you have a string variable named 'str'
var str = "123, 456, 789";
// Replace the first instance of "1" with "one"
var newStr = str.replace("1", "one");

// 17. If you want all instances replaced, enter 3 characters that need to appear in this statement. var y = x.replace("a", "z");
var y = x.replace(/a/g, "z");

// ---------------------  Chapter 26 (Rounding Numbers)  --------------------------------------------

// 1. Form a statement that rounds a number to the nearest integer.
var num = 3.14159;
var roundedNum = Math.round(num);

// 2. Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
var origNum = 3.14159;
var roundNum = Math.ceil(origNum);

// 3. Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
var origNum = 3.14159;
var roundNum = Math.floor(origNum);

// 4. Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.
var origNum = 3.14159;
var roundNum = Math.round(origNum);

// 5. Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.
var num = 0.5;
var roundNum = Math.round(num);

// ---------------------------------  Chapter 27 (Random Numbers)  ----------------------------------------

// 1. Convert a random number generated by JavaScript to a number in the range 1 to 50.
var randomNum = Math.floor(Math.random() * 50) + 1;

// 2. Generate a random number and assign it to a variable that hasn't been declared beforehand.
var randomNum = Math.floor(Math.random() * 50) + 1;
// 3. You have to create a dice in JavaScript with the use of pseudorandom number.4. You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.
var randomNum = Math.floor(Math.random() * 2) + 1;

// ------------------------------  Chapter 28, 29 (Converting Strings)  --------------------------------

// 1. How do you convert a string to an integer in JavaScript?
var str = "123";
var num = parseInt(str);

// 2. Write a JavaScript function to convert the string "123" to an integer.
function convertToInteger(str) {
  return parseInt(str);
}

// 3. How can you convert a string containing a decimal number to a floating-point number in JavaScript?
var str = "123.45";
var num = parseFloat(str);

// 4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?
var str = "123";
var num = parseInt(str);
if (isNaN(num)) {
  console.log("String cannot be converted to integer");
}

// 5. How can you convert a number to a string in JavaScript?
var num = 123;
var str = num.toString();

// 6. Write a JavaScript function to convert the number 42 to a string.
function convertToString(num) {
  return num.toString();
}

// 7. Can you convert a string representing a decimal number (e.g: "3.14") to an integer in JavaScript? If so, how?
var str = "3.14";
var num = parseInt(str);
if (isNaN(num)) {
  console.log("String cannot be converted to integer");
}

// ------------------------------  Chapter 30 (Controlling the length of decimals)  -------------------------------------------

// 1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.
var num = 3.14159;
var newNum = num.round(4).tostring();

// 2. In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.
var num = 3.14159;
num = parseInt(num.toFixed(2));

// 3. Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.
if (num.toFixed(2).length > 4) {
  // code run if condition is true
}
// 4. Assign a number with many decimal places to a variable. Code an alert that displays the number rounded to 2 decimal places and converted to a string.
var num = 3.14159;
alert(num.toFixed(2));

// -------------------------------  Chapter 31 - 34 (Date & Time)  -------------------------------------

// 1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.
dObj = new Date();

// 2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.
var dObj = new Date();
var dStr = dObj.toString();

// 3. Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.
var d = new Date();
var day = d.getDay();

// 4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.
var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
alert(dayNames[day]);

// 5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.
var d = new Date();

var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
var millisecond = d.getMilliseconds();

// 6. Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.
var d = new Date(2020, 11, 31);

// 7. Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.
var d = new Date(1992, 1, 2);

//  8. Code a single statement that displays in an alert the milliseconds  that elapsed between the reference date and the beginning of  1980.
var d = new Date(1980, 0, 1);

//  9. How do you change the year of a date in JavaScript?
// By using setFullYear() method
// For example:
var d = new Date();
d.setFullYear(2023);

//  10. Write a JavaScript function to change the month of a givendate to January.
function changeMonthToJanuary(date) {
  date.setMonth(0);
}
//  11. What is the method to change the day of the week for a  specific date in JavaScript?
// By using setDate() method
// For example:
var d = new Date();
d.setDate(22);

// 12. Write a JavaScript function to change the minutes of a given  time to a specific value. (Value by prompt)
function changeMinutesToSpecificValue(time, value) {
  time.setMinutes(value);
}

// Example usage:
var currentTime = new Date();
var newMinutes = prompt("Enter the new minutes:");
changeMinutesToSpecificValue(currentTime, newMinutes);

//  13. Write a JavaScript function to add a specific number of  hours to a given time.
function addNumbersToGivenTime(time, hours){
    time.setHours(time.getHours() + hours)
}

//  14. You have to create a age calculator in JavaScript.
function calculateAge(birthYear, currentYear) {
    return currentYear - birthYear;
}
  
  var birthYear = 1990;
  var currentYear = new Date().getFullYear();
  var age = calculateAge(birthYear, currentYear);
  console.log("You are " + age + " years old.");

// ---------------------  Chapter 35 - 37 (Functions) -------------------------------------------

// 1. Code the first line of a function displayAlert.
function displayAlert(){}

// 2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.
function askName(){
    var username = prompt("Enter your name: ");
}

// 3. Code a function that calls 2 other functions.
function mainFunc(){
    displayAlert();
    askName();
}

// 4. Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.
function askName(){
    var username = prompt("Enter your name: ");
    alert(username);
}


// 5. Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.
function concat(a,b,c){
}

// 6. Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.
function param(a,b){
    var c = a + b;
}

// 7. Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.
function param(a,b,c){
    var d = a * b * c;
}

// 8. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
function avg(numbers){
    var sum = 0;
    for (var i=0 ; i<numbers.length ; i++){
        sum += numbers[i];
    }
    return sum / numbers.length;
}
var average = avg([1,2,3,4,5,6,7,8]);
alert(average);

// 9. Write a JavaScript function that takes two parameters and returns their sum.
function sum(num1, num2){
    return num1 + num2;
}

// 10. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers
// Done above

// 11. You have to capture the returned value from a function and store it in a variable?
var result = avg([1,2,3,4,5]);

// 12. Write a function which tells letter counts of (word).
// Owais
function countLetters(word){
    var letterCounts = {};
    word = word.toLowerCase();

    for (var i=0; i<word.length; i++){
        var letter = word[i];
        if (letterCounts[letter]){
            letterCounts[letter]++ ;
        }
        else{
            letterCounts[letter] = 1
        }
    }
    return letterCounts;
}
var result = countLetters("programming");
console.log(result);

// 13. Write a function to set (year) in date object.
function setYear(date, year){
    date.setFullYear(year);
}

// 14. Write a function which tells the age of a person who Born on (dateOfBirth).
function tellAge(dateOfBirth){
    var currentYear = new Date().getFullYear()
    return currentYear - dateOfBirth
}
var myAge = tellAge(2000);
alert(myAge);

// 15. Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'] result should be in true or false.
var array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
function presense(name){
    name = name.toLowerCase();

    for (var i=0; i<array.length; i++){

        if(name === array[i]){
            return true;
        }
    }
    return false;
}
var check = presense("Haris");
alert(check);  // answer = true

// 16. Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10)
function repeatLetter(letter){
    return letter.repeat(10);
}

var c = repeatLetter("a");
alert(c);

// 17. write a function which reverse array = ['a','b','c','d','e'] Hint: arr.reverse()
// array = ['a','b','c','d','e'];
function reverseArray(array){
    return array.reverse();
}
var rev = reverseArray(["a","b","c","d","e"])
alert(rev);

// ------------------------------ Chapter 38 (Local vs. Global Variables) -----------------------------

// 1. Write a JavaScript function that demonstrates the usage of a local variable.
function localVariable(){
    var localVar = "I am a local variable";
    console.log(localVar);
}

// 2. How can you access a global variable inside a function in JavaScript?

// ----------------------  Chapter 39, 40 (Switch Statements)  ---------------------------------------

// 1. Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.
function switchStatement(value){
    switch(value){
      case 1:
        console.log("Value is 1");
        break;
      case 2:
        console.log("Value is 2");
        break;
      case 3:
        console.log("Value is 3");
        break;
      default:
        console.log("Value is not 1, 2, or 3");
    }
}


// 2. Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.
function switchStatement(cityName){
    switch(cityName){
      case "Lahore":
        alert("Lahore is the capital of Punjab");
        break;
      case "Karachi":
        alert("Karachi is the capital of Sindh");
        break;
      case "Islamabad":
        alert("Islamabad is the capital of Pakistan");
        break;
      default:
        alert("City not found");
    }
}
