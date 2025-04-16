/**
  * [UTILIZE PARA EXECUTAR]: npm run sistema_gerenciamento_funcionarios_01
  * 
  * 
  * [01. ] ~ Sistema de Gerenciamento de Funcionários
  *
  * Criar um sistema simples de gerenciamento de funcionários em TypeScript, usando:
  * - objetos; 
  * - desestruturação; 
  * - template literals;
  * - interfaces. 
  * 
  * Implementação:
  *
  * Funcionalidades
  *
  *    1. Defina uma interface Funcionario que tenha as propriedades nome, idade, cargo e salario.
  *    2. Crie alguns objetos de funcionários com dados fictícios.
  *    3. Utilize a desestruturação para extrair as propriedades dos objetos de funcionários e exibi-las usando template literals.
  *    4. Implemente uma função aumentarSalario que receba um funcionário e um percentual de aumento de salário como parâmetros, e atualize o salário do funcionário de acordo com o percentual dado.
  *    5. Teste a função aumentarSalario com um dos funcionários e exiba o novo salário.
  */

import { Funcionario } from "./models/Funcionario";

// Lista de objetos funcionarios com dados fictícios:
const funcionario1: Funcionario = new Funcionario(
  "Augusto Zimmer", 
  23, 
  "Desenvolvedor Fullstack Junior",
  3500.00
);
const funcionario2: Funcionario = new Funcionario(
  "Benjamin Yousef", 
  25, 
  "Desenvolvedor Backend Pleno",
  4500.00
);
const funcionario3: Funcionario = new Funcionario(
  "Clara Xavier", 
  20, 
  "Desenvolvedor Frontend Junior",
  2500.00
);

// Utilizando a desestruturação para extrair as propriedades dos objetos de funcionários
function printarDadosFuncionario(funcionario: Funcionario): string {
  const {nome, idade, cargo, salario} = funcionario;
  const dados: string = `Nome: ${nome} | Idade: ${idade} | Cargo: ${cargo} | Salario: ${salario}`;
  return dados;
}

// Exibindo as propriedades usando template literals.
console.log("[> ] Listando os funcionarios:")
console.log(printarDadosFuncionario(funcionario1));
console.log(printarDadosFuncionario(funcionario2));
console.log(printarDadosFuncionario(funcionario3));

// Testando função aumentarSalario.
console.log("\n[> ] Realizando aumento de 5% no sálario do Funcionario numero 3...");
funcionario3.aumentarSalario(5);

console.log("\n[> ] Funcionario numero 3 depois de ter seu salario aumentado:");
console.log(printarDadosFuncionario(funcionario3));
