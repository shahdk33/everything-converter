function SecondsToHours(seconds){

	let paragraph = document.getElementById('answer2');

	if(isNaN(seconds)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	else{
		paragraph.innerText = ("Answer: " + seconds/3600 + " hours");}

}

function HoursToSeconds(hours){

	let paragraph = document.getElementById('answer');

	if(isNaN(hours)){
		paragraph.innerText = ("Please enter a valid number!");

	}


	//changing the inner text of the Answer paragraph in the body 
	else{
		paragraph.innerText = ("Answer: " + hours*3600 + " seconds");}

}

function HoursToMinutes(hours){

	let paragraph = document.getElementById('answer3');

	if(isNaN(hours)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + hours*60 + " minutes");}

}

function MinutesToHours(minutes){

	let paragraph = document.getElementById('answer4');

	if(isNaN(minutes)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + minutes/60 + " hours");}

}

function MinutesToSeconds(minutes){

	let paragraph = document.getElementById('answer5');

	if(isNaN(minutes)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + minutes*60 + " seconds");}

}

function SecondsToMinutes(seconds){

	let paragraph = document.getElementById('answer6');

	if(isNaN(seconds)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + seconds/60 + " minutes");}

}



//weight conversions
function KgToGrams(kgs){

	let paragraph = document.getElementById('answer7');

	if(isNaN(kgs)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + kgs*1000 + " grams");}

}

function GramsToKg(grams){

	let paragraph = document.getElementById('answer8');

	if(isNaN(grams)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + grams/1000 + " kgs");}

}

function image(){
	// alert("hey! Dont touch me!!!");

	let element = document.getElementsByClassName('image');
	//if the element is the second image
	if(element.src='image2.png'){

		//change the text to lalal
		let paragraph = document.getElementById('bubble');
		paragraph.innerHTML = ("<br>lalalalala");
	
		//change the image to the gif
		let image = document.getElementById('image2');
		image.src = ('cuteImage.gif');
		image.id = 'image';
	}
	else{
		//change to click me
		let paragraph = document.getElementById('bubble');
		paragraph.innerHTML = ("Click me!");
	
		//change to 
		let image= document.getElementById('image');
		image.src = ('image2.png');
		image.id = 'image2';
	}



}
