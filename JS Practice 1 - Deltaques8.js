// Define the object with the required details
const person = {
  name: "aritra",
  age: 21,
  place: "kota"
};

// Function to return keys of an object
function getObjectKeys(obj) {
  return Object.keys(obj);
}

// Call the function
const keys = getObjectKeys(person);

// Print the result
console.log("Keys of the object:", keys);