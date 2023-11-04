// 1.For the given JSON iterate over all for loops (for, for in, for of, forEach)

// a.for

const jsonData = {
    "name": "kamali",
    "age": 24,
    "city": "India"
  };
  
  
console.log("Using a for loop:");
  const keys = Object.keys(jsonData);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = jsonData[key];
    console.log(key + ": " + value);
    
  }

//   b.
console.log("Using a for...in loop:");
for (const key in jsonData) {
  const value = jsonData[key];
  console.log(key + ": " + value);
}

// c.
const key= Object.keys(jsonData);
console.log("Using a for...of loop:");
for (const key of keys) {
  const value = jsonData[key];
  console.log(key + ": " + value);
}

// d.
  
  console.log("Using forEach loop:");
  Object.entries(jsonData).forEach(([key, value]) => {
    console.log(key + ": " + value);
  });

