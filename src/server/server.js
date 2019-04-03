import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/products', (req, res) => {
  fs.readFile(path.join(__dirname, 'productData.json'), (err, data) => {
    setTimeout(() => res.send(data), 750);
  });
});

app.get('/api/cart', (req, res) => {
  const cartFilePath = path.join(__dirname, 'cartData.json');

  fs.readFile(cartFilePath, 'utf8', (err, data) => {
    let selectedProducts = data ? JSON.parse(data) : [];

    res.send(selectedProducts);
  });
});

app.post('/api/cart', (req, res) => {
  // body = {id}
  const selectedProduct = req.body;
  const cartFilePath = path.join(__dirname, 'cartData.json');

  fs.readFile(cartFilePath, 'utf8', (err, data) => {
    let selectedProducts = data ? JSON.parse(data) : [];
    let productIndex = selectedProducts.findIndex(
      p => p.id === selectedProduct.id
    );

    if (productIndex === -1) {
      productIndex = selectedProducts.push(selectedProduct) - 1;
    }

    selectedProducts[productIndex].quantity =
      (selectedProducts[productIndex].quantity || 0) + 1;

    fs.writeFile(cartFilePath, JSON.stringify(selectedProducts), () => {
      res.send(selectedProducts);
    });
  });
});

app.delete('/api/cart', (req, res) => {
  // req.body.product = {id, quantity}
  const selectedProduct = req.body.product;
  const cartFilePath = path.join(__dirname, 'cartData.json');

  fs.readFile(cartFilePath, 'utf8', (err, data) => {
    let selectedProducts = data ? JSON.parse(data) : [];
    let productIndex = selectedProducts.findIndex(
      p => p.id === selectedProduct.id
    );

    selectedProducts[productIndex].quantity =
      (selectedProducts[productIndex].quantity || 0) - 1;

    if (selectedProducts[productIndex].quantity <= 0) {
      selectedProducts.splice(productIndex, 1);
    }

    fs.writeFile(cartFilePath, JSON.stringify(selectedProducts), () => {
      res.send(selectedProducts);
    });
  });
});

app.get('/', (req, res) => {
  res.send({
    result: '404 not found'
  });
});

app.listen(3001, () => console.log('Express server listening on port 3001!'));
