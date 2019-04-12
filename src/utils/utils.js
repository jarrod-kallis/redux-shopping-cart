export const formatPrice = price => {
  // if (typeof price !== 'number') {
  //   throw new Error('Can only format a number.');
  // }
  return price || price === 0 ? `R${price.toFixed(2)}` : '';
};
