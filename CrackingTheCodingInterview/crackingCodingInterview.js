// Cracking the Coding Interview
// JavaScript

function URLify(str){
	var newstr = '';
	for (var i=0; i < str.length; i++){
		if (str[i] == " "){
			newstr += "%20";
		}
		else{
			newstr += str[i];
		}

	}
	return newstr;
	// return str.replace(" ", "%20");
}