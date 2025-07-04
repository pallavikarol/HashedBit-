function mergeObjects(obj1, obj2) {
  // Merge obj1 and obj2 into a new object
  return Object.assign({}, obj1, obj2);
}

// Example input objects
const objA = { name: "Aritra", age: 21 };
const objB = { occupation: "Student", country: "India" };

// Merge the objects using the function
const merged = mergeObjects(objA, objB);

// Output the merged object
console.log(merged);