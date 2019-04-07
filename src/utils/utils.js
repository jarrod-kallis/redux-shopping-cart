export const formatPrice = price => {
  // if (typeof price !== 'number') {
  //   throw new Error('Can only format a number.');
  // }

  return `R${price.toFixed(2)}`;
};
