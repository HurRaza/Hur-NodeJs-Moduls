// The fs (File System) module in Node.js provides functions to interact with the file system, enabling reading, writing, deleting,
// and manipulating files and directories. This module offers both synchronous and asynchronous methods.

// Asynchronous methods are non-blocking, allowing other code to execute while waiting for file operations to complete.
// Synchronous methods are blocking, meaning they halt the execution of further code until the file operation is completed.
// Use Cases
// The fs module is often used for:

// Logging data to a file.
// Reading configuration files.
// Storing user data in files.
// Loading or saving data to be processed or used in the application.

// asynchronous -> readFile, writeFile
// synchronous -> readFileSync, writeFileSync

const fs = require("fs");

// Create New file 
fs.appendFile('input.txt', 'We are learning filesystems.', (err) => {
  if (err) {
    console.log("Error in creating new file: ",err)
    return;
  };
  console.log('New file created!');
});

//Asynchronous File Read
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);

  // Asynchronous File Write
  fs.writeFile("output.txt", data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }
    console.log("Data successfully written to output.txt");
  });
});

console.log("Reading file asynchronously...");

try {
  // Synchronous File Read
  const data = fs.readFileSync("input.txt", "utf8");
  console.log("File content:", data);

  // Synchronous File Write
  fs.writeFileSync("output.txt", data);
  console.log("Data successfully written to output.txt");
} catch (err) {
  console.error("Error:", err);
}

console.log("Reading file synchronously...");

// Append data to a file asynchronously
fs.appendFile("output.txt", "\nNew line added", (err) => {
  if (err) {
    console.error("Error appending to file:", err);
    return;
  }
  console.log("Data appended successfully");
});

// Delete the file 
fs.unlink("output.txt", (err) => {
if (err) {
  console.error("Error deleting file:", err);
  return;
}
console.log("File deleted successfully");
});

// Rename the file
fs.rename('input.txt', 'myfileinput.txt', (err)=> {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }
  console.log('File renamed successfully');
});