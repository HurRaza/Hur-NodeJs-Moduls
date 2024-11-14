const path = require("path");

console.log("",)

const filePath = __dirname;
const fileName = __filename;

console.log("Current directory", filePath);

console.log("Current filename", fileName)

console.log("Directory:", path.dirname(filePath));

console.log("File Name:", path.basename(filePath));

console.log("File Extension:", path.extname(fileName));

console.log("File is Absolute:", path.isAbsolute(fileName));

console.log("Normalize Path:", path.normalize(filePath))

const fullPath = path.join("/Users/hur/Desktop", __dirname);
console.log("Join Path:", fullPath);

const parsePath = path.parse("/Users/hur/Desktop/path.js");
console.log("Parsed Path:", parsePath);

console.log("format Parsed Path:", path.format(parsePath));
