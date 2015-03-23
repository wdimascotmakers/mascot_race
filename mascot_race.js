var Mascot = function(name, food item, endurance) {
	this.name = name;
	this.food = food;
	this.endurance = endurance;
	var run {
		//add Nat's code here
	}
}

var penny = new Mascot("Penny","Prune","3");
var reggie = new Mascot("Reggie","rice cake","2");
var carl = new Mascot("Carl","Clamato","4");

var race = function(race_distance, mascot1, mascot2, mascot3 ) {
	var distanceOne = race_distance;
	var distanceTwo = race_distance;
	var distanceThree = race_distance;
	
	while (distanceOne > 0 && distanceTwo > 0 && distanceThree > 0) {
		distanceOne = distanceOne - mascot1.run();
		distanceTwo = distanceTwo - mascot2.run();
		distanceThree =  distanceThree - mascot3.run();

		console.log(distanceOne + " " + "meters left")
		console.log(distanceTwo + " " + "meters left")
		console.log(distanceThree + " " + "meters left")	



	}


}

race(20, penny, reggie, carl);