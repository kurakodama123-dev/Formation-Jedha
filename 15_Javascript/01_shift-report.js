// Loops drills

const speeds = [820, 640, 0, 1050, 990, 1310, 480];


// Step 1: Print every speed with a for loop

for (let i=0; i< speeds.length; i++) {
	console.log("Drone " + i + ": "+ speeds[i])
}


// Step 2: Sum and count with an accumulator

let total=0, count=0;

for (const speed of speeds) {
	total=total+speed;
	count++
}
console.log("Drones : " + count);
console.log("Total speed : " + total);


//Ereur d'énoncé.  Step2 et step 5, la somme des vitesses "Total speed" donne 5290 et non 5300 comme attendu.

// Step 3: Track the fastest drone

let fastest=0;

speeds.forEach((speed) => {
	if (speed>=fastest) {
		fastest=speed;
	}
});
console.log("Fastest:" + fastest);

// Step 4: Skip and stop with continue and break

for (speed of speeds) {
	if (speed===0) {
		continue;
	}
	else if (speed>=1300) {
		break;
	}
	else {
		console.log("Cleared: "+ speed);
	}
};


// Step 5: Fix the broken total

total = 0;

for (const speed of speeds) {
  total = total + speed;
}

console.log("Total speed: " + total);


