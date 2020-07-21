const calcOp = require('./at4');

test('O programa deve somar n1 e n2 e depois multiplicar por n3', () => {
    expect(calcOp(1, 1, 2)).toBe(4);
});