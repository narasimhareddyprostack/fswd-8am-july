let employees = [
  { name: "Vinay", sal: 40000, loc: "BNG" },
  { name: "Vara", sal: 50000, loc: "HYD" },
  { name: "Mani", sal: 60000, loc: "USA" },
  { name: "Rahul", sal: 140000, loc: "BNG" },
  { name: "Narasimha", sal: 40000, loc: "SNG" },
];

//display only USA
for (value of employees) {
  if (value.loc === "USA") {
    console.log(value);
  }
}
