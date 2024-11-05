const url = require("url");
const fs = require("fs");
const http = require("http");
const path = require("path");

http
  .createServer((req, res) => {
    // Parse the URL to get the path
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;
    console.log(pathname);

    // Default to index.html if root path is requested
    if (pathname === "/") {
      pathname = "./index.html";
    }

    // Construct the file path
    // const filePath = path.join(__dirname, pathname);

    // Check if the requested file has .html extension for security
    // if (path.extname(filePath) !== ".html") {
    //   res.writeHead(403, { "Content-Type": "text/html" });
    //   return res.end("<h1>Forbidden</h1>");
    // }

    // Read and serve the file
    fs.readFile(pathname, (err, data) => {
      if (err) {
        // If the file is not found or there's an error, return 404
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("<h1>404 Not Found</h1>");
      }
      // Serve the file content
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(9000, () => {
    console.log("Server running on http://localhost:9000");
  });
