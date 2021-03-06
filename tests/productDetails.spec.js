/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const result = productDetails('Alcool', 'Mascara');
    const array = Array.isArray(result);
    assert.deepStrictEqual(array, true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(result.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof result[0], 'object');
    assert.deepStrictEqual(typeof result[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(result[0], result[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const object1 = result[0].details.productId.split(/\D+/);
    const object2 = result[1].details.productId.split(/\D+/);
    assert.strictEqual(object1[1], '123');
    assert.strictEqual(object2[1], '123');
  });
});
