const pow = require('./at5');

test('Faz a potência de dois números, o primeiro é a base o segundo é a potência', () => {
    expect(pow(2, 2)).toBe(4);
});