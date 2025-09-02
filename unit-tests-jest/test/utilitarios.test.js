const Utilitarios = require('../src/utilitarios');
const utils = new Utilitarios();

describe('Classe Utilitarios', () => {
  test('inverterString', () => {
    expect(utils.inverterString('abc')).toBe('cba');
  });

  test('contarCaracteres', () => {
    expect(utils.contarCaracteres('hello')).toBe(5);
  });

  test('paraMaiusculas', () => {
    expect(utils.paraMaiusculas('abc')).toBe('ABC');
  });

  test('paraMinusculas', () => {
    expect(utils.paraMinusculas('ABC')).toBe('abc');
  });

  test('primeiraLetraMaiuscula', () => {
    expect(utils.primeiraLetraMaiuscula('exemplo')).toBe('Exemplo');
  });

  test('somar', () => {
    expect(utils.somar(2, 3)).toBe(5);
  });

  test('subtrair', () => {
    expect(utils.subtrair(5, 3)).toBe(2);
  });

  test('multiplicar', () => {
    expect(utils.multiplicar(4, 5)).toBe(20);
  });

  test('dividir', () => {
    expect(utils.dividir(10, 2)).toBe(5);
    expect(() => utils.dividir(5, 0)).toThrow("Divisão por zero");
  });

  test('ehPar', () => {
    expect(utils.ehPar(4)).toBe(true);
    expect(utils.ehPar(5)).toBe(false);
  });

  test('primeiroElemento', () => {
    expect(utils.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test('ultimoElemento', () => {
    expect(utils.ultimoElemento([1, 2, 3])).toBe(3);
  });

  test('tamanhoArray', () => {
    expect(utils.tamanhoArray([1, 2, 3])).toBe(3);
  });

  test('ordenarArray', () => {
    expect(utils.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test('inverterArray', () => {
    expect(utils.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('gerarNumeroAleatorio', () => {
    const num = utils.gerarNumeroAleatorio(50);
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(50);
  });

  test('ehNumero', () => {
    expect(utils.ehNumero(123)).toBe(true);
    expect(utils.ehNumero('abc')).toBe(false);
    expect(utils.ehNumero(NaN)).toBe(false);
  });

  test('removerEspacos', () => {
    expect(utils.removerEspacos('  teste  ')).toBe('teste');
  });

  test('repetirTexto', () => {
    expect(utils.repetirTexto('ab', 3)).toBe('ababab');
  });

  test('juntarArray', () => {
    expect(utils.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
  });

  test('contarPalavras', () => {
    expect(utils.contarPalavras('uma frase com cinco palavras')).toBe(5);
    expect(utils.contarPalavras('   ')).toBe(0);
  });

  test('mediaArray', () => {
    expect(utils.mediaArray([1, 2, 3, 4])).toBe(2.5);
    expect(utils.mediaArray([])).toBe(0);
  });

  test('removerDuplicados', () => {
    expect(utils.removerDuplicados([1, 1, 2, 3, 2])).toEqual([1, 2, 3]);
  });

  test('ehPalindromo', () => {
    expect(utils.ehPalindromo('arara')).toBe(true);
    expect(utils.ehPalindromo('Ame a ema')).toBe(true);
    expect(utils.ehPalindromo('teste')).toBe(false);
  });

  test('mesclarObjetos', () => {
    expect(utils.mesclarObjetos({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    expect(utils.mesclarObjetos({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
  });
});
