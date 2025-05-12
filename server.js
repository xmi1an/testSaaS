const express = require("express");
const path = require("path");

const app = express();

// Serve static files (CSS, etc.)
app.use(express.static(path.join(__dirname)));

// Serve homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend server running on port ${PORT}`);
});
