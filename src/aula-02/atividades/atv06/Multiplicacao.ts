/**
 * Crie uma função chamada multiply 
 * que recebe dois números como parâmetros 
 * e retorna o produto deles. 
 * Chame essa função e exiba o resultado.
 */

function multiply(primeiroFator: number, segundoFator: number): number {
  let produtoDaMultiplicacao: number = primeiroFator * segundoFator;
  return produtoDaMultiplicacao;
}


let multiplicacao: number = multiply(7, 3);
console.log(multiplicacao);