//Part 2: Expanding Functionality
console.log("\nPart 2 Expanding Functionality\n");
const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let arr = csv.split("\n"); //returns an array of strings from CSV, spilit up by '\n'

//iterate through all the strings in arr
for (i in arr) {
  arr[i] = arr[i].split(","); //replace strings with same strings split into an array
}
console.log(arr);

//Part 3: Transforming Data
console.log("\nPart 3 Transforming Data\n");
let arr_of_objs = []; //empty array, gonna be our array of objects

/*create necessary amount of objects, we start at row i becasue the very first 
 row in our 2D array is used for the properites of the object */

//iterate through our 2d Array rows
for (let row = 1; row < arr.length; row++) {
  let obj = {}; //empty object we'll populate

  //iterate throguh 2D array columns,
  for (let col = 0; col < arr[row].length; col++) {
    let property = arr[0][col].toLocaleLowerCase(); //get the name of the property from arr row 1(the properties row) column x
    obj[property] = arr[row][col]; //the value is from arr row i, column x
  }

  arr_of_objs.push(obj); //push it into array
}
console.log(arr_of_objs);

//Part 4 Sorting and Manipulating Data
console.log("\nPart 4 Sorting and Manipulating Data\n");
console.log(`Our starting array is:`);
console.log(arr_of_objs);

arr_of_objs.pop();
console.log(`\nWhen we remove the last index from the sortred array we get:`);
console.log(arr_of_objs);

arr_of_objs.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
console.log(`\nWhen we add an object at index 1, we get:`);
console.log(arr_of_objs);

arr_of_objs.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(`\nWhen we add an object to the end, we get:`);
console.log(arr_of_objs);

let average_age = 0;
for (x of arr_of_objs) {
  average_age += Number(x.age);
}

console.log(`The average age is ${average_age / arr_of_objs.length} years.`);

// //Part 5: Full Circle
console.log("\nPart 5 Full Circle\n");
//output = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let str = ""; //what ill return ultimatley
let line_one = Object.keys(arr_of_objs[0]); //getting that first part of the string, the keys of the objects

//go through each indivudal string in the array and turn it into its own array
for (let i in line_one) {
  line_one[i] = line_one[i].split(""); //turn it into an array
  line_one[i][0] = line_one[i][0].toUpperCase(); //capitilze the first letter
  line_one[i] = line_one[i].join(""); //join it back into a string
}

str += line_one.join(",") + "\n";

//1)Loop throguh the indivual objects,
for (let x of arr_of_objs) {
  //x is the atcual object
  str += Object.values(x).join(",") + "\n"; //2) get an array of their values, 3) collapse it into a string separated by comma
}
console.log(str);
