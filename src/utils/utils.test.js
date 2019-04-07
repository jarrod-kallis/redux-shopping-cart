import { formatPrice } from './utils';

it('formats the price', () => {
  expect(formatPrice(2)).toEqual('R2.00');
  expect(formatPrice(2.5)).toEqual('R2.50');
  expect(formatPrice(2.555)).toEqual('R2.56');
  expect(formatPrice(2.554)).toEqual('R2.55');
  expect(formatPrice(0.5)).toEqual('R0.50');
  expect(formatPrice(0.5)).toBe('R0.50');
});

it('fails to format anything except numbers', () => {
  expect(() => formatPrice('a')).toThrowError(TypeError);
  expect(() => formatPrice('z.00')).toThrow();
});
