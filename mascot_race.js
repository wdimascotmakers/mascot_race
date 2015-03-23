var Mascot = function(name, food_item, endurance) {
	this.name = name;
	this.food = food_item;
	this.endurance = endurance;
	this.run = function() {
		var dist=Math.floor(Math.random()*this.endurance);
		console.log(this.name + " " + this.food + " sprinted " + dist + " meters! Go " + this.name + " " + this.food + "!");
		return dist
	}

}

var race = function(race_distance, mascot1, mascot2, mascot3 ) {
	var distanceOne = race_distance;
	var distanceTwo = race_distance;
	var distanceThree = race_distance;
	
	while (distanceOne > 0 && distanceTwo > 0 && distanceThree > 0) {
		distanceOne = distanceOne - mascot1.run();
		console.log(distanceOne + " " + "meters left");
		distanceTwo = distanceTwo - mascot2.run();
		console.log(distanceTwo + " " + "meters left");
		distanceThree =  distanceThree - mascot3.run();
		console.log(distanceThree + " " + "meters left");



	}
	
	if (distanceOne <= 0){
		console.log (mascot1.name + " " + mascot1.food + " wins!")
	}else if(distanceTwo <= 0){
		console.log (mascot2.name + " " + mascot2.food + " wins!")
	}else if(distanceThree <= 0){
		console.log (mascot3.name + " " + mascot3.food + " wins!")

	}else if((distanceThree && distanceTwo === 0) || (distanceTwo && distanceOne === 0) || (distanceThree && distanceOne === 0) || (distanceThree && distanceOne && distanceTwo === 0)){
		console.log ("Tie! THERE ARE NO WINNERS.")


}
}
var penny = new Mascot("Penny","Prune",3);
var reggie = new Mascot("Reggie","rice cake",2);
var carl = new Mascot("Carl","Clamato",4);
race(20, penny, reggie, carl);