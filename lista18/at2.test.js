const somar = require('./at2');

test('Deve somar os três números', () => {
    expect(somar(1, 2, 3)).toBe(6);
})