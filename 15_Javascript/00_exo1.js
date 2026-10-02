
Variables and types drills
----------------------------------

const customerName = "Nadia Brandt";
const customerId = "ADX-0042";

let accountBalance = 12;
let isSuspended = false;

accountBalance = accountBalance + 6;

console.log(typeof customerName);
console.log(typeof accountBalance);
console.log(typeof isSuspended);

console.log(`Customer ${customerId} (${customerName}) owes ${accountBalance} credits. Suspended: ${isSuspended}`);

const depositPoints = ["DP-01", "DP-07", "DP-12"];
console.log(depositPoints[0]);
console.log(depositPoints.length);
depositPoints.push("DP-20");
console.log(depositPoints.length);




====================
Bug hunt in the console
------------------------------

console.log("Welcome to AeroDrop dispatch");

const parcel = "Coffee crate";
console.log(parcel);

let accountBalance = 12;
accountBalance = accountBalance + 6;
console.log(accountBalance);

const balance = 12;
const deliveryFee = 6;
console.log(balance + deliveryFee);

const status = "in transit";
console.log(status);

const droneId = "D-12";
console.log(droneId);

const fleetSize = 8;
console.log(fleetSize);

const morning = 15;
const afternoon = 10;
console.log(morning + afternoon);


====================
Delivery math and first values
------------------------------

// Step 1
const distanceKm = 12;
const baseFeePerKm = 0.85;
console.log("Base fee:", distanceKm * baseFeePerKm);

// Step 2
const baseFee = 10.2;
const taxRate = 0.2;
const tax = baseFee * taxRate;
console.log("Tax:", tax);
console.log("Total with tax:", baseFee + tax);

// Step 3
const totalWithTax = 12.24;
const prioritySurcharge = "5";
console.log("Final total:", totalWithTax + prioritySurcharge);       // bug
console.log("Final total:", totalWithTax + Number(prioritySurcharge)); // fixed

// Step 4
const monthlyFleetBudget = 48000;
let activeDrones = 16;
console.log("Cost per drone:", monthlyFleetBudget / activeDrones);
console.log("One drone offline for maintenance.");
activeDrones = activeDrones - 1;
console.log("Updated cost per drone:", monthlyFleetBudget / activeDrones);

// Step 5-7
const flightLog = [142, 89, "37", 210];
console.log("First flight:", flightLog[0]);
console.log("Last flight:", flightLog[3]);
console.log("Number of flights:", flightLog.length);

console.log("Subtotal:", flightLog[0] + flightLog[1] + flightLog[2]);       // bug
console.log("Subtotal:", flightLog[0] + flightLog[1] + Number(flightLog[2])); // fixed

flightLog[2] = 37;
console.log("typeof flightLog[2]:", typeof flightLog[2]);
flightLog.push(178);
console.log("Flights logged:", flightLog.length);
const totalDistance = flightLog[0] + flightLog[1] + flightLog[2] + flightLog[3] + flightLog[4];
console.log("Average distance:", totalDistance / flightLog.length);


