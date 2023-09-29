console.log("\nQ1");
for (let i = 2; i < 11; i+= 2) {
    console.log(i);
}

console.log("\nQ2");
for (let i = 5; i > 0; i--) {
    console.log(i);
}

console.log("\nQ3");
const numbers = [1, 2, 3, 4, 5];
sum = 0;
for (const num of numbers) {
    sum += num;
}
console.log(sum);

console.log("\nQ4");
const student = {name:'John', age:20, grade:'A'};
for (const key in student) {
    console.log(key);
}

console.log("\nQ5");
const book = {title:'Harry Potter', author:'J.K. Rowling', year:1997};
for (const key in book) {
    console.log(book[key]);
}

console.log("\nQ6");
const colors = ['red', 'green', 'blue', 'yellow'];
for (const color of colors) {
    console.log(color);
}

console.log("\nQ7");
sum = 0;
for (const num of numbers) {
    sum += num;
}
console.log(sum);

console.log("\nQ8");
const temperatures = [32, 68, 75, 82, 56];
temperatures.forEach(function(fahrenheit, index) {
    temperatures[index] = (fahrenheit-32)*5/9 
});
console.log(temperatures);

console.log("\nQ9");
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = {'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2320268}
cities.forEach(function(city) {
    console.log(`${city}: ${populations[city]}`);
});

console.log("\nQ10");
for (let i = 1; i <= 5; i++) {
    let starString = "";
    for (let j = 0; j < i; j++) {
        starString += "*";
    }
    console.log(starString);
}