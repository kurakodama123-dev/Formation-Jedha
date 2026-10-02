//  Your first console program


// Step 1: Start from the provided data

const drones = [
  { name: "Kestrel", bestRun: 58.2, deliveries: 12 },
  { name: "Osprey", bestRun: 61.7, deliveries: 12 },
  { name: "Harrier", bestRun: 55.9, deliveries: 11 },
  { name: "Condor", bestRun: 59.4, deliveries: 12 },
];

console.log(drones[0]);


// Step 2: Write a function to compute a score

function scoreOf(drone){
	return drone.deliveries * 100 - drone.bestRun;
};

// Step 3: Order the drones

/*     version compliquée
const orderedList=[...drones];

orderedList.forEach((item) => item.score= scoreOf(item));
//console.log(orderedList);

orderedList.sort((a,b)=> b.score-a.score);
console.log(orderedList);
*/

const orderedList = [...drones].sort((a, b) => scoreOf(b) - scoreOf(a));



// Step 4: Print the standings

function formatLine(position, drone) {
  return `${position}. ${drone.name} (${scoreOf(drone)} pts)`;
}

orderedList.forEach((drone, index) => {
  console.log(formatLine(index + 1, drone));
});

// Step 5: Fix the broken sort

const ranked = [...drones].sort((a, b) => scoreOf(b) - scoreOf(a));

ranked.forEach((drone, index) => {
  console.log(formatLine(index + 1, drone));
});
