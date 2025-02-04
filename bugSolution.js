function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Or throw an error, or return a default value, depending on your requirements
  } else if (typeof a !== 'number' || typeof b !== 'number'){
    return NaN; // Handle cases where a or b are not numbers
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10
console.log(foo("a", 5)); // Output: NaN