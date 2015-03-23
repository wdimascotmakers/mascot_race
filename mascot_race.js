var Mascot = function(name, food item, endurance) {
	this.name = name;
	this.food = food;
	this.endurance = endurance;
	this.run = function(){
		var dist=Math.floor(Math.random()*this.end)
		console.log(this.name + " " this.food + " sprinted " + dist + " meters! Go " this.name + " " + this.food + "!")
		return dist
	}

}

var penny = new Mascot("Penny","Prune","3");
var reggie = new Mascot("Reggie","rice cake","2");
var carl = new Mascot("Carl","Clamato","4");

var race = function(race_distance, mascot1, mascot2, mascot3 ) {
	var distanceOne = race_distance;
	var distanceTwo = race_distance;
	var distanceThree = race_distance;
	var distOneLeft = distanceOne - penny.run();
	var distTwoLeft = distanceTwo - reggie.run();
	var disThreeLeft =  distanceThree - carl.run();
	console.log('distOneLeft');
	console.log('distTwoLeft');
	console.log('distThreeLeft');
	if() {
		
	}

}