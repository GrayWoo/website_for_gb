const express = require("express");
const fs = require("fs");
const cartRouter = require("./cartRouter");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use("/", express.static(path.resolve(__dirname, "../public")));

const allowedOrigins = ["http://localhost:8080", "http://localhost:5555"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
app.use("/api/cart", cartRouter);

/**
 * Используем path дабы избежать проблем с относительными путями до файлов. Делаем их абсолютными.
 */
const catalogJSONPath = path.resolve(__dirname, "./db/products.json");

app.get("/api/products", (req, res) => {
  fs.readFile(catalogJSONPath, "utf-8", (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

// app.get(); // READ
// app.post(); // CREATE
// app.put(); // UPDATE
// app.delete(); // DELETE
