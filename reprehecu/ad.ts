function subtract(a: number | undefined, b: number): number {
  // If the first parameter is not provided (undefined), default it to 0
  const firstParam = a ?? 0;
  return firstParam - b;
}

// Usage:
// To avoid sending the first parameter, use undefined
const result = subtract(undefined, 5);
console.log(result); // Output will be -5
