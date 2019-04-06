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
  product: {
    add: async product => {
      const res = await fetch('/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product })
      });

      const products = await res.json();

      return products;
    },
    delete: async productId => {
      const res = await fetch('/api/product', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: productId })
      });

      debugger;
      if (res.ok) {
        const products = await res.json();

        return products;
      } else {
        throw Error(`Request rejected with status ${res.status}`);
      }
    }
  },
  cart: {
    get: () => fetch('/api/cart').then(res => res.json()),
    add: async productId => {
      try {
        const res = await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: productId })
        });

        const products = await res.json();

        return products;
      } catch (e) {
        throw Error(e);
      }
    },
    remove: async product => {
      try {
        const res = await fetch('/api/cart', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ product })
        });

        const products = await res.json();

        return products;
      } catch (e) {
        throw Error(e);
      }
    }
  }
};
