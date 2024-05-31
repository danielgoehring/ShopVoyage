const getProducts = (req, res) => {
    // Fetch products from the database
    res.json([
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 150 },
    ]);
  };
  
  module.exports = { getProducts };
  