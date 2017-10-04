
//Setting and Swapping
var myNumber = 42;
var myName = "Batman";
var temp = myNumber;
myNumber = myName;
myName = temp;

//Print -52 to 1066
for(i=-56; i<=1066; i++){
	console.log(i);
}

//Don't worry, be happy
function beCheerful(times){
	for(i=1; i<=times; i++){
		console.log("good morning!");
	}
}

beCheerful(98);

//Multiples of Three -- but not all

for(i=-300; i <= 0; i += 3){
	if(i < -6 || i > -3){
		console.log(i);
	}
	//console.log(0);  // <-- Alternatively...
}

//Printing Integers with While
var i = 2000;
while(i <= 5280){
	console.log(i);
	i++;
}

// You Say It's Your Birthday
function birthday(a, b){
	if(a == 02 || b == 02 && a == 08 || b == 08){
		console.log("How did you know?");
	}
	else{
		console.log("Just another day...");
	}
}

// Leap Year
function isLeapYear(year){
	if(year % 4 === 0){
		if(year % 100 === 0 && year % 400 != 0){
			return false;
		}
		return true;
	}
	return false;
}

// Print and Count
var count = 0;
for(i = 512; i <= 4096; i++){
	if(i % 5 === 0){
      console.log(i);
      count++;
    }
}
console.log(count);

//Multiples of 6
var i = 0;
while(i <= 60000){
	if(i % 6 === 0){
		console.log(i);
	}
	i++;
}

//Counting the Dojo Way
for(var i=0; i<= 100; i++){
	if(i%5===0){
		if(i%10===0){
			console.log("Coding Dojo");
		}
        else{
          console.log("Coding");
        }
	}
	else{
		console.log(i);
	}
}

//What do You Know?

function myFunction(incoming){
	console.log(incoming);
}

// Whoa, that sucker's huge...
// Shortcut is just to add the start and stop values.
// If each is the reverse of the other, sum will always be 0.
// Side note: on sites like jsbin and pythontutor this code always produces
// (what I think is a) stack overflow.
// On jsbin -150000/150000, and numbers in that neighborhood, 
// are borderline cases -- sometimes code runs correctly,
// sometimes get overflow.
var sum = 0;
for (i=-300000; i<=300000; i++){
	if(i%2 !== 0){
		sum += i;
	}
}
console.log(sum);

//