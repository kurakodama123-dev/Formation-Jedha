
// Exercice "Conditionals drills"

let speed = 640;
let classLabel

// Step 1: Classify one drone with if / else if / else

if (speed <=500) {
  classLabel="slow";
} else if (speed <= 1000) {
  classLabel="standard";
} else {
  classLabel="fast";
}
console.log(speed + " -> " + classLabel);


// Step 2: Check one exact id with strict equality

const flaggedDroneId = "DRN-1300";
const incomingId = "DRN-1300";

if (incomingId===flaggedDroneId) {
  console.log("Hold for inspection");
}

// Step 3: Pick priority with a ternary

speed = 1300;

const priority=speed>1000? "priority": "regular";
console.log(priority);

// Step 4: Pick the fee with a switch

const droneClass = "standard";
let fee;

switch (classLabel){
  case "slow":
	fee=30;
	break;
  case "standard":
	fee=50;
	break;
  case "fast":
	fee=80;
	break;
  default :
	fee=0;
	break;
}
console.log("Fee:" + fee + " credits");

// Step 5: Fix the broken classifier

speed = 320;
let label;

if (speed <= 500) {
  label = "slow";
} else if (speed <= 1000) {
  label = "standard";
} else {
  label = "fast";
}

console.log(label);

