/**
 * Crie uma arrow function chamada greet que receba um nome 
 * e retorne uma saudação no formato Olá, [nome]!. 
 * Utilize template literals para formatar a mensagem.
 */

const greet = (nome: string): string => `Olá, ${nome}!`;

console.log(greet("Matheus"));
