
/**
 * [ATIVIDADE 01] - Interface para manipulação de dados de funcionários:
 * - Interface Funcionario que tenha as propriedades nome, idade, cargo e salario.
 */
export class Funcionario {

  public nome: string;
  public idade: number;
  public cargo: string;
  public salario: number;

  constructor(
    nome: string,
    idade: number,
    cargo: string,
    salario: number) {

      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
      this.salario = salario;
  }

  public aumentarSalario(percentualAumento: number): void {
    const valorAumento: number = (this.salario * percentualAumento) / 100;
    this.salario = this.salario + valorAumento;
    console.log("Aumento realizado com sucesso!");
  }

}


