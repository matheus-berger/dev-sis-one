import { IFuncionario } from "../interface/IFuncionario";

export class Funcionario implements IFuncionario {
  
  private nome: string;
  private cargo: string;
  private salario: number;

  constructor(nome: string, cargo: string, salario: number) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = Math.round(salario * 100) / 100;
  }

  // Getters e Setters
  public getNome(): string {
    return this.nome;
  }
  public setNome(nome: string): void {
    this.nome = nome;
  }
  public getCargo(): string {
    return this.cargo;
  }
  public setCargo(cargo: string): void {
    this.cargo = cargo;
  }
  public getSalario(): number {
    return this.salario;
  }
  public setSalario(salario: number): void {
    this.salario = Math.round(salario * 100) / 100;
  }

}