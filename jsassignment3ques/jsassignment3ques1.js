let states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

// Use array.filter() to remove states starting with a vowel
let filteredStates = states.filter(state => {
  let firstLetter = state.charAt(0).toLowerCase();
  return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
});

// Print the final filtered list
console.log(filteredStates);