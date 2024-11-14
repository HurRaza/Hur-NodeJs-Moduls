const url = require("url");

const myURL = new URL("https://example.com:8080/path/?page=1&name=hur&age=22");



// Access parts of the URL
console.log("Protocol:", myURL.protocol); // https:
console.log("Origin",myURL.origin); // https://example.com:8080
console.log("Origin",myURL.href); // https://example.com:8080/path/?page=1&name=hur&age=22
console.log("Hostname:", myURL.hostname); // example.com
console.log("Port:", myURL.port); // 8080
console.log("Pathname:", myURL.pathname); // /path
console.log("Query Parameters:", myURL.searchParams.get("page")); // 1
console.log("Name Parameters:", myURL.searchParams.get("name")); // hur
console.log("Age Parameters:", myURL.searchParams.get("age")); // 22


// Format URL
myURL.pathname = "/newPath";
myURL.searchParams.set("name", "Jane");
myURL.searchParams.set("age", "35");


console.log("Updated URL:", myURL.toString());

console.log("Parse URL:", url.parse(myURL.toString(),true));