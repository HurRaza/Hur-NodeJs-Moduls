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

import fs from "fs";

// Asynchronous File Read
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
