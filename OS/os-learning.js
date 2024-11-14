// To Get information about the computer's operating system

const os = require("os");

console.log("Host Name: ", os.hostname());
console.log("OS Type:", os.type());
console.log("Platform:", os.platform());
console.log("Release ", os.release());
console.log("Architecture:", os.arch());
console.log("Total Memory:", os.totalmem()); // in bytes so bytes/(1024*1024*1024);
console.log("Free Memory:", os.freemem());
console.log("Uptime:", os.uptime()); // in seconds 
console.log("CPUS:", os.cpus());
console.log("Machine:",os.machine());
console.log("Machine:",os.userInfo());
console.log("Home Directory:",os.homedir());
console.log("Version:",os.version());