// Objects drills


// Step 1: Build one drone object

const drone = {
  model: "Falcon-7",
  operator: "Jib",
  charge: 55,
  passedDiagnostic: false,
};


console.log(drone.model);
console.log(drone.charge);

// Step 2: Read, update, and add properties

drone.charge=75;
console.log(drone.charge);

drone.lastService="2026-09-12";

const field = "operator";
console.log(drone[field]);

// Step 3: Add a method

drone.status= function () {
	const diagnostic= this.passedDiagnostic ? "Diagnostic passed" : "Diagnostic failed";

//    return '${this.model} at ${this.charge}, ${this.passedDiagnostic]';    -   ne fonctionne pas
    return this.model +" at "+ this.charge +", "+diagnostic;
  };

console.log(drone.status());


//Step 4: Make a fleet, an array of objects

const fleet =[
  {
  model: "Falcon-7",
  operator: "Jib",
  charge: 55,
  passedDiagnostic: false,
  },
  {
  model: "Falcon-8",
  operator: "Tom",
  charge: 45,
  passedDiagnostic: true,
  },
  {
  model: "Falcon-9",
  operator: "Ryan",
  charge: 20,
  passedDiagnostic: true,
  },
];

let total=0;

fleet.forEach ((ship) => {
	if (ship.passedDiagnostic) {
		total++	
	};
});
console.log(total + " of " + fleet.length +" drones passed");

// Step 5: Fix the broken method

const drone2 = {
  model: "Falcon-7",
  charge: 70,
  status: function () {
    return this.model + " at " + this.charge + "%";
  },
};

console.log(drone2.status());

