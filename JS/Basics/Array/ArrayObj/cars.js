let cars = [
  { name: "Hundai", color: "red", price: 1200000 },
  { name: "Hundai", color: "blue", price: 1000000 },
  { name: "Hundai", color: "green", price: 900000 },
  { name: "Tata", color: "blue", price: 500000 },
  { name: "Hundai", color: "red", price: 700000 },
];
//Print only Tata cars

let i = 0;
while (i <= cars.length - 1) {
  if (cars[i].name == "Tata") {
    console.log(cars[i]);
  }
  i++;
}
//print only red
console.log("Printing Red cars");
for (car of cars) {
  if (car.color == "red") {
    console.log(car);
  }
}
//print car price below 6 lacks
