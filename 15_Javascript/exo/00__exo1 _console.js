// Arrays drills


//  Step 1: Create the shelf and read items

const parts=["rotor", "battery", "sensor", "propeller"]

console.log(parts[0]);
console.log(parts[parts.length-1]);
console.log(parts.length);

// Step 2: Add and remove parts

parts.push("gimbal");
console.log(parts);

parts.pop();
console.log(parts);

// Step 3: Copy and merge with spread

const overflow = ["camera", "antenna"];
const duplicates=[...parts, "beacon"];

console.log(duplicates);
console.log(parts);

const mergeArray=[...parts , ...overflow];
console.log(mergeArray);

// Step 4: Hold a mixed-type record

const entry = ["battery", 12, true];

console.log(entry[0]);
console.log(entry[1]);
console.log(entry[2]);
console.log(typeof entry[0]);
console.log(typeof entry[1]);
console.log(typeof entry[2]);

// Step 5: Walk the shelf

parts.forEach((part)=> {
  console.log(part);
});

for (const part of parts) {
  console.log(part);
}

// Step 6: Discover includes on MDN

console.log(parts.includes("battery") );


//  Step 7: Fix the broken last-item read

shipParts = ["rotor", "battery", "sensor", "propeller"];

console.log("Last part: " + shipParts[parts.length-1]);

