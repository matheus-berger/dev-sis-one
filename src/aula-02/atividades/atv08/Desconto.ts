/**
 * Crie uma função chamada discountPrice 
 * que recebe um preço e um desconto opcional (valor padrão de 10%). 
 * A função deve retornar o valor final com o desconto aplicado.
 */

function discountPrice(preco: number, descontoPorcentagem: number = 10): number {
  let valorDoDesconto: number = (preco * descontoPorcentagem) / 100;
  let valorComDescontoAplicado: number = preco - descontoPorcentagem;
  return valorComDescontoAplicado;
}

let precoLivroAprendendoTypeScript: number = 72.75;

console.log(`Valor do Livro Aprendendo TypeScript ${precoLivroAprendendoTypeScript}`);
console.log(`Preco com 10% de desconto: ${discountPrice(precoLivroAprendendoTypeScript)}`);
console.log(`Preco com 25% de desconto: ${discountPrice(precoLivroAprendendoTypeScript, 25)}`);
console.log(`Preco com 30% de desconto: ${discountPrice(precoLivroAprendendoTypeScript, 30)}`);
