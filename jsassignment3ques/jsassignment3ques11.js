const students = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

let result = {};

for (let student in students) {
  let marks = Object.values(students[student]); // Get all subject marks as array
  let total = marks.reduce((sum, mark) => sum + mark, 0); // Add all marks
  let average = total / marks.length; // Divide by number of subjects
  result[student] = { average: Math.round(average) }; // Store rounded average
}

console.log(result);