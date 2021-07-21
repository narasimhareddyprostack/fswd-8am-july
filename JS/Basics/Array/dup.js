let a = [-1, 10, -1];
let b = [];
for (let i = 0; i <= a.length - 1; i++) {
  if (b.indexOf(a[i]) == -1) {
    b.push(a[i]);
  }
}
console.log(b);
