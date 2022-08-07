const obj = { name: "karthik", age: 25 };
console.log(obj.name); // O(1) - accessing
console.log(obj["age"]); // O(1) - accessing
obj.lname = "raikar"; // O(1) - inserting
console.log(obj);
console.log(Object.keys(obj)); // O(n) - return array of keys from the object
console.log(Object.values(obj)); // O(n) - return array of values from the object
console.log(Object.entries(obj)); // O(n) - return array of [key, value] pairs from the object
delete obj.lname; // O(1) - deleting
console.log(obj);
