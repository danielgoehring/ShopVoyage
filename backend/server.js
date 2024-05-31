const express = require('express');
const cors = require('cors'); // Import cors
const pool = require('./config/db');
const app = express();

app.use(cors()); // Use cors
app.use(express.json());

// Existing endpoint to get products
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    console.log('Products from DB:', result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Endpoint to add a new product
app.post('/api/products', async (req, res) => {
  const { name, price, imageurl } = req.body;
  try {
    const result = await pool.query('INSERT INTO products (name, price, imageUrl) VALUES ($1, $2, $3) RETURNING *', [name, price, imageurl]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


// New endpoint to update a product
app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const result = await pool.query('UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *', [name, price, id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// New endpoint to delete a product
app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
