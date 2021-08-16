let arr = [
  { name: "Narasimha", sal: 45000 },
  { name: "Rahul", sal: 56666 },
];
console.log(arr);

/* for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i].name);
} */

/* for (emp of arr) {
  console.log(emp.name);
} */

let result = arr.forEach((emp) => {
  return emp;
});
console.log(result);
