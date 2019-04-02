export default {
  products: {
    get: async () => {
      try {
        const res = await fetch('/api/products');
        const products = await res.json();

        return products;
      } catch (e) {
        throw Error(e);
      }
    }
  },
  cart: {
    add: async (product) => {
      try {
        await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ product })
        });

        return product;
      } catch (e) {
        throw Error(e);
      }
    }
  }
}