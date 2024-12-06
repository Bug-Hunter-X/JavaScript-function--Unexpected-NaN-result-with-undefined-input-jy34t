function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return null; // Handle null and undefined values
  } else if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN values
  }
  return a + b;
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: null
console.log(foo(10, NaN)); // Output: NaN
console.log(foo(NaN, 20)); // Output: NaN
console.log(foo(undefined,20));//Output: null