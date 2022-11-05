const express = require('express');

const DBConnect = require('./database');
const userRoutes = require('./routes/userRoutes');
const prodRoutes = require('./routes/prodRoutes');
const prod = require('./models/product');

const port = process.env.PORT || 5500;
const app = express();

//Database
DBConnect();

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use('/api/user', userRoutes);
app.use('/api/prodmgmt', prodRoutes);

app.get('/', (req, res) => {
  return res.send('working');
});

app.get('/api/getProd/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json(err);
  }

  try {
    const product = await prod.findById(id);
    return res.status(200).json({
      singleProd: product,
    });
  } catch (err) {
    return res.status(404).json(err);
  }
});

app.get('/api/companyPrd/:email', async (req, res) => {
  const { email } = req.params;

  if (!email) {
    return res.status(404).json(err);
  }

  try {
    const products = await prod.find({ manufacture: email });
    return res.status(200).json({
      products,
    });
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
