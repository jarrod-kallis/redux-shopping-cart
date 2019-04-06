import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import shortId from 'shortid';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/products', (req, res) => {
  fs.readFile(path.join(__dirname, 'productData.json'), (err, data) => {
    setTimeout(() => res.send(data), 750);
  });
});

// Insert or update a product
app.post('/api/product', (req, res) => {
  const selectedProduct = req.body.product;
  const productFilePath = path.join(__dirname, 'productData.json');

  fs.readFile(productFilePath, 'utf8', (err, data) => {
    let products = data ? JSON.parse(data) : [];
    let productToUpdateIndex = products.findIndex(
      p => p.id === selectedProduct.id
    );

    if (productToUpdateIndex > -1) {
      const productToUpdate = {
        ...products[productToUpdateIndex],
        ...selectedProduct
      };

      products = [
        ...products.slice(0, productToUpdateIndex),
        productToUpdate,
        ...products.slice(productToUpdateIndex + 1)
      ];
    } else {
      products.push({ id: shortId.generate(), ...selectedProduct });
    }

    fs.writeFile(productFilePath, JSON.stringify(products), () => {
      // setTimeout(() => res.send(products), 5000);
      res.send(products);
    });
  });
});

// Delete a product
app.delete('/api/product', (req, res) => {
  const selectedProductId = req.body.id;
  const productFilePath = path.join(__dirname, 'productData.json');

  // We check if the product is in the cart
  const cartFilePath = path.join(__dirname, 'cartData.json');
  fs.readFile(cartFilePath, 'utf8', (err, data) => {
    let selectedProducts = data ? JSON.parse(data) : [];
    let productIndex = selectedProducts.findIndex(
      p => p.id === selectedProductId
    );

    // Product exists in the cart - not allowed to delete
    if (productIndex > -1) {
      res.sendStatus(400);
    } else {
      fs.readFile(productFilePath, 'utf8', (err, data) => {
        let products = data ? JSON.parse(data) : [];
        let productToUpdateIndex = products.findIndex(
          p => p.id === selectedProductId
        );

        if (productToUpdateIndex > -1) {
          products = [
            ...products.slice(0, productToUpdateIndex),
            ...products.slice(productToUpdateIndex + 1)
          ];
        }

        fs.writeFile(productFilePath, JSON.stringify(products), () => {
          res.send(products);
        });
      });
    }
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
