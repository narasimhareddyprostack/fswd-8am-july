let a = [1, 2, 3, 1, 2];

// option 1 -
let a1 = [...new Set(a)];
console.log(a1);

//options 2:
let b = [];
for (let i = 0; i <= a.length - 1; i++) {
  for (let j = 1; j <= i; j++) {
    if (a[i] == a[j]) {
      b.push(a[i]);
    } else {
    }
  }
}
console.log(b);
