

const objectToConvert = { name: "Alice", age: 25 }; // Example object to convert
// Convert object to JSON string
const jsonStringified = JSON.stringify(objectToConvert); // Converts object → string
console.log(jsonStringified); // Output: {"name":"Alice","age":25}


console.log(typeof objectToConvert); // Output: object
console.log('Here the object is converted to a string:');
console.log(typeof jsonStringified); // Output: string

