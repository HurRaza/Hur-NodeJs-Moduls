const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello, Zentech!</h1>");
    res.end();
  }
  else if(req.url === '/about'){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});


// Start the server
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
