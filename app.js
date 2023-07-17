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

function KgTolbs(kg){
	let paragraph = document.getElementById('answer9');

	if(isNaN(kg)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + kg*2.20462 + " lbs");}
}

function lbsToKg(lbs){
	let paragraph = document.getElementById('answer10');

	if(isNaN(lbs)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + lbs/2.20462 + " kg");}
}

function OuncesToGrams(oz){
	let paragraph = document.getElementById('answer11');

	if(isNaN(oz)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + oz*28.3495 + " grams");}
}


function GramsToOunces(g){
	let paragraph = document.getElementById('answer12');

	if(isNaN(g)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + g/28.3495 + " oz");}
}


function USDtoCAD(USD){
	let paragraph = document.getElementById('answer13');

	if(isNaN(USD)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + USD*1.32 + " CAD");}
}

function GBPtoCAD(GBP){
	let paragraph = document.getElementById('answer14');

	if(isNaN(GBP)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + GBP*1.73 + " CAD");}
}

function EURtoCAD(EUR){
	let paragraph = document.getElementById('answer15');

	if(isNaN(EUR)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		paragraph.innerText = ("Answer: " + EUR*1.48 + " CAD");}
}

function TaxCalculator(payment, percent){
	let paragraph = document.getElementById('answer16');

	if(isNaN(payment) || isNaN(percent)){
		paragraph.innerText = ("Please enter a valid number!");

	}

	//changing the inner text of the Answer paragraph in the body 
	
	else{
		payment = parseFloat(payment);
		percent = parseFloat(percent);
		let answer = payment + (payment*(percent/100));
		paragraph.innerText = ("Answer: " + answer + " CAD");}
}




