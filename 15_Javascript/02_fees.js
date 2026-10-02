// Functions drills

const sampleSpeeds = [320, 640, 1050];

// Step 1: Write a function that returns a value

function dispatchFee(speed) {
		return speed*2;
}

for (const speed of sampleSpeeds) {
  console.log(dispatchFee(speed));
};


// Step 2: Add a second parameter

function discountedFee(fee, discountRate) {
	return fee * (1 - discountRate);
}

console.log(discountedFee(1000,0.2));
console.log(discountedFee(1000,0.5));

// Step 3: Rewrite one function as an arrow function

const dispatchFee2 = (speed) => speed*2;

console.log(dispatchFee2(320));

// Step 4: See local scope in action

function lambda(speed) {
	const note = "internal";
	return note+ ": " + speed;
};
//console.log(note);   //  ReferenceError: note is not defined

console.log(lambda(640));


// Step 5: Build a new list with map

const doubleSpeeds = sampleSpeeds.map((speed) => dispatchFee2(speed));

console.log(doubleSpeeds);


// Step 6: Keep some items with filter

const FilteredDoubleSpeeds = sampleSpeeds.filter((speed) => speed > 500);

console.log(FilteredDoubleSpeeds);


// Step 7: Find one drone by name

const drones = [
	{name :"Falcon", speed : 1050},
	{name :"X-wing", speed : 640},
	{name :"Y-wing", speed : 320},
]

const matchDrone = drones.find((ship) => ship.name === "Falcon");
console.log(matchDrone);
const matchDrone2 = drones.find((ship) => ship.name === "W-wing");
console.log(matchDrone2);

// Step 8: Discover forEach on MDN

sampleSpeeds.forEach((speed) => console.log("Dispatching at " + speed));


// Step 9: Fix the broken function

function dispatchFee3(speed) {
  return speed * 2;
};

console.log("Fee: " + dispatchFee3(640));
