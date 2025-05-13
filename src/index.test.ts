import Sum from './index';

test('adds 1 + 2 + 3 + 4  to equal 10,0000', () => {
    expect(Sum(1, 2, 3, 4)).toBe(10);
});
