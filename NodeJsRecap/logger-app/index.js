const path = require("path");
const fs = require("fs");

// console.log(process.argv);

const inputArguments = process.argv.slice(2);

const text = inputArguments.join(" ");


const timeStamp = new Date().toISOString();
console.log(timeStamp)
const message = `${text} ${timeStamp}\n`;

if (!text) {
  console.log("please provide a message");
}

const filePath = path.join(__dirname, "log.txt");
fs.appendFile(filePath, message, { encoding: "utf-8" }, () => {
  console.log("log added");
});

console.log(filePath);
