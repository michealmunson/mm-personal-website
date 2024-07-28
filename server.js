const express = require("express");
const app = express();
const path = require("path");

// Explain to express the files it should use in addition to your main html file.
app.use(express.static(__dirname + "/src"));

// Make a get endpoint whenever someone visits your website. If there's an error
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "/src", "/index.html");
  console.log(`Sending file: ${filePath}`); // Logging the file path for debugging
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Failed to send file:", err);
      res
        .status(500)
        .send(
          "Internal Server Error! Please contact Micheal Munson at mmichealc@gmail.com"
        );
    } else {
      console.log("File sent successfully");
    }
  });
});

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
