const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  console.log(`Sending file: ${filePath}`); // Logging the file path for debugging
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Failed to send file:", err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("File sent successfully");
    }
  });
});

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
