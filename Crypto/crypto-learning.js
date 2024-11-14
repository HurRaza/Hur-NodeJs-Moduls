const crypto = require("crypto");

// Hash a password
const hash = crypto.createHash("sha256").update("hur@zenkoders").digest("hex");
console.log("Hashed Password With SHA256:", hash);

const key="Hi";
const hash1 = crypto.createHash("md5",key).update("hur@zenkoders").digest("hex");
console.log("Hashed Password With MD5:", hash1);
