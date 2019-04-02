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
  })
});

app.post('/api/cart', (req, res) => {
  console.log('What was sent in: ', req.body.product);
  const cartFilePath = path.join(__dirname, 'cartData.json');
  fs.readFile(cartFilePath, 'utf8', (err, data) => {
    console.log('What was read from the file: ', data);
    if (!data) {
      fs.writeFile(cartFilePath, JSON.stringify([req.body.product]), () => {
        res.send('');
      });
    } else {
      console.log('First pass:');
      let cartData = JSON.parse(data);
      console.log('1', cartData);
      cartData.push(req.body.product);
      console.log('2', cartData);

      fs.appendFile(cartFilePath, JSON.stringify(cartData), () => {
        res.send('');
      });
    }
  });
  // res.send('TODO');
});

app.get('/', (req, res) => {
  res.send({
    result: '404 not found'
  });
});

app.listen(3001, () =>
  console.log('Express server listening on port 3001!'),
);