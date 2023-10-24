const fs = require('fs');

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}
const bookJSON = JSON.stringify(book);
console.log(bookJSON);
console.log(bookJSON.title);
const bookParsed = JSON.parse(bookJSON);
console.log(bookParsed);
console.log(bookParsed.title);
fs.writeFileSync('1-json.json', bookJSON);
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
console.log(dataJSON);
const data = JSON.parse(dataBuffer);
console.log(data);
const dataBufferData = fs.readFileSync('data.json');
const dataJSONData = dataBufferData.toString();
const dataData = JSON.parse(dataJSONData);
console.log(dataData.name, dataData.city)
dataData.name = "Andrew";
dataData.city = "Golden";
const updateDataJSON = JSON.stringify(dataData);
fs.writeFileSync('data.json', updateDataJSON);
