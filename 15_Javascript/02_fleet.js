// Array of objects drills


const fleet = [
  { name: "Kestrel", model: "X1", charge: 82, speed: 64, zone: "north" },
  { name: "Osprey", model: "X2", charge: 47, speed: 72, zone: "south" },
  { name: "Harrier", model: "X1", charge: 91, speed: 58, zone: "north" },
  { name: "Condor", model: "X3", charge: 63, speed: 80, zone: "east" },
  { name: "Falcon", model: "X2", charge: 38, speed: 75, zone: "south" },
];

//  Step 1: Read one drone by index and dot

console.log(fleet.length);
console.log(fleet[0].name);
console.log(fleet[2].charge);

// Step 2: Pull one field out of every drone with map

const modelsList = [...fleet].map((item) => item.model);
console.log(modelsList);
//console.log(fleet);

// Step 3: Keep only the charged drones with filter

const charged= fleet.filter((item) => item.charge>60);

console.log(charged.length);
//console.log(charged);

console.log([...charged].map((item) => item.name));

// Step 4: Locate one drone with find

const selection = fleet.find((item) => item.model === "X3");
console.log(selection.name);
console.log(selection.zone);

// Step 5: Chain filter into map

/*  décomposition - version décomposée
const selected= fleet.filter((item)=> item.speed>70);
console.log(selected);

const result= selected.map((item)=> item.name);
console.log(result);
*/

// version chainée
const result= fleet.filter((item)=> item.speed>70).map((item)=> item.name);
console.log(result);


// Step 6: Loop over one drone's keys

for (const key of Object.keys(fleet[0])) {
	console.log(key + " : " + fleet[0][key]);
};


// Step 7: Fix the broken map

const models = fleet.map((drone) => {
  return drone.model;
});
//const models = fleet.map((drone) => drone.model);     version arrow

console.log(models);


