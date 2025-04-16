/**
 * 10. Função com Parâmetro Opcionais: 
 * Crie uma função chamada orderPizza que recebe dois parâmetros: 
 *        - size (tamanho obrigatório) 
 *        - flavor (opcional). 
 *  > Se flavor não for informado, assuma "Mussarela" como padrão. 
 * Exiba a mensagem "Pedido: Pizza [flavor], tamanho [size].".
 */

type tamanhoPizzas = "Pequena" | "Média" | "Grande";

function orderPizza(size: tamanhoPizzas, flavor?: string): string {
  let pizzaFlavor = flavor ? flavor : "Mussarela";
  return "Pedido: Pizza " + pizzaFlavor + ", tamanho " + size;
}

console.log(orderPizza("Pequena"));
console.log(orderPizza("Média", "Calabresa"));
console.log(orderPizza("Grande", "Portuguesa"));
