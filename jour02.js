// Number

var integer = 102;
var float = 13.9;
console.log(integer)
console.log(float)

// Convert

var basic = "34"
var stringified  = basic.toString()
console.log(stringified)

// Round

var num = 1.5
rounded = Math.round (num)
console.log(rounded)

// Arithmétique

var test = 12
var bis = 5
console.log(test + bis)
console.log(test - bis)
console.log(test * bis)
console.log(test / bis)
console.log(test ** bis)
console.log(test % bis)

// Comparaison

var test = 143
var bis = 219
console.log(test > bis)
console.log(test < bis)
console.log(test = bis)
console.log(test >= bis)
console.log(test <= bis)
console.log(test == bis)
console.log(test === bis)
console.log(test != bis)
console.log(test !== bis)

// Condition

var limit = 50
var score = 64
if(score >= limit){
    console.log("Ok good !")
}else{
    console.log("Oh nooo...")
}

// Condition II

var password  ="azerty"
if(password.length > 5){
    console.log("The password is secure")
}

// Condition III

var limit = 50
var score = 64
var password = "azerty"
if(score >= limit && password.length > 5){
    console.log("Everything is good")
}else if(score >= limit || password.length > 5){
    console.log("Something is good")
}else{
    console.log("Nothing is good")
}

// Bonus 
var min = 1
var max = 6
var random = Math.floor(Math.random() * (max - min + 1) + min)

if(random === 6){
    console.log("Yes I win !")
}else{
    console.log("So close...")
}

// // Bonus 2

var month = "January"

switch (month) {
	case "January": 
		console.log("Winter");
		break;
	case "February": 
		console.log("Winter");
		break;
	case "March": 
		console.log("Winter");
		break;
	case "April": 
		console.log("Spring");
		break;
    case "May": 
		console.log("Spring");
		break;
	case "June": 
		console.log("Spring");
		break;
	case "Juillet": 
		console.log("Summer");
		break;
	case "Aout": 
		console.log("Summer");
		break;
    case "September": 
		console.log("Summer");
		break;
	case "October": 
		console.log("Autumn");
		break;
	case "November": 
		console.log("Autumn");
		break;
	case "December": 
		console.log("Autumn");
		break;
}

// =

switch (month) {
	case "January": 
	case "February": 
	case "March": 
		console.log("Winter");
		break;
	
    case "April": 
    case "May": 
	case "June": 
		console.log("Spring");
		break;
	
    case "Juillet": 
	case "Aout": 
    case "September": 
		console.log("Summer");
		break;
	
    case "October": 
	case "November": 
	case "December": 
		console.log("Autumn");
		break;
}

// Bonus3
var roundedNumber = (3.3)
    if(roundedNumber = Math.floor("")){
    console.log("3")
    }else(roundedNumber = Math.ceil(""))
    console.log("4")
    

// var letters = roundedNumber.substring(0,10)

