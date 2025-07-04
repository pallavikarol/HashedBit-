// Create an object called person with name, age, and occupation
const person = {
  name: "Pallavi Karol",
  age: 20,
  occupation: "Student"
};

// Function to greet the person using object properties
function greetPerson(obj) {
  console.log(`Hello, my name is ${obj.name}. I am ${obj.age} years old and I work as a ${obj.occupation}.`);
}

// Call the function with the person object
greetPerson(person);