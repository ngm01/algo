// Coding Dojo Algorithm Challenges
// Chapter 9: Recursion (pp 96 - 106)
// Greatest Common Factor (p 101) 9/28/17
// Find greatest common factor of two integers

function rGCF(a, b){
	if(a === b){
		return a;
	}
	if(a > b){
		return gCF(a-b, b);
	}
	if(b > a){
		return gCF(a, b-a);
	}
}

//Faster Greatest Common Factor
//"rework...to reduce stack consumption & expand gCF;s reach. Should be able to compute rGCF(123456, 987654)"
// Should comment this up
function fGCF(a, b){
	if(a===b){
		return a;
	}
	if(a > b){
		if(a % b === 0){
			return b;
		}
		return fGCF(a%b, b);
	}
	else{
		if(b % a === 0){
			return a;
		}
		return fGCF(a, b%a);
	}
}

console.log(fGCF(123456, 987654))