const express = require("express");
const cors = require("cors"); // Import cors
const pool = require("./config/db");
const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://shopvoyage.onrender.com",
];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );

app.use(cors()); // This allows all origins for testing purposes

app.use(express.json());

// Existing endpoint to get products
app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    console.log("Products from DB:", result.rows);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Endpoint to add a new product
app.post("/api/products", async (req, res) => {
  const { name, price, imageUrl, category, type } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO products (name, price, imageUrl, category, type) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, price, imageUrl, category, type]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Endpoint to update a product
app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const result = await pool.query(
      "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *",
      [name, price, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Endpoint to delete a product
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM products WHERE id = $1", [id]);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// New endpoints for products1
app.get("/api/products1", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products1");
    console.log("Products1 from DB:", result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.get("/api/products1/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM products1 WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).send("Product not found");
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.post("/api/products1", async (req, res) => {
  const { name, price, imageUrl, category, type } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO products1 (name, price, imageUrl, category, type) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, price, imageUrl, category, type]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.put("/api/products1/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const result = await pool.query(
      "UPDATE products1 SET name = $1, price = $2 WHERE id = $3 RETURNING *",
      [name, price, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.delete("/api/products1/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM products1 WHERE id = $1", [id]);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// New endpoint to get all collections
app.get("/api/collections", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM newCollections");
    console.log("Collections from DB:", result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Endpoint to add a new collection
app.post("/api/collections", async (req, res) => {
  const { name, description, imageUrl } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO newCollections (name, description, imageUrl) VALUES ($1, $2, $3) RETURNING *",
      [name, description, imageUrl]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Endpoint to update a collection
app.put("/api/collections/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const result = await pool.query(
      "UPDATE newCollections SET name = $1, description = $2 WHERE id = $3 RETURNING *",
      [name, description, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Endpoint to delete a collection
app.delete("/api/collections/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM newCollections WHERE id = $1", [id]);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
