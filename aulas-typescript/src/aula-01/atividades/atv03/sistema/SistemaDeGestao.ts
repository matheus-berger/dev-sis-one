import { Funcionario } from "../models/entity/Funcionario";
import { BaseDeDadosFuncionarios } from "./BaseDeDadosFuncionarios";

export class SistemaDeGestão {

  private baseDeDadosFuncionarios: BaseDeDadosFuncionarios;

  constructor() {
    this.baseDeDadosFuncionarios = new BaseDeDadosFuncionarios();
  }

  public contratarFuncionario(nome: string, cargo: string, salario: number): void {
    const funcionario: Funcionario = new Funcionario(nome, cargo, salario);
    return this.baseDeDadosFuncionarios.adicionarFuncionario(funcionario);
  }

  public atualizarInformacoesDeFuncionario(indiceDoFuncionario: number, funcionario: Funcionario): void {
    return this.baseDeDadosFuncionarios.alterarFuncionarioPorIndice(indiceDoFuncionario, funcionario);
  }

  public buscarFuncionarioPorNome(nomeDoFuncionario: string): Funcionario | undefined {
    return this.baseDeDadosFuncionarios.retornarFuncionarioPorNome(nomeDoFuncionario);
  }

  public buscarFuncionarioPorIndice(indiceDoFuncionario: number): Funcionario | undefined {
    return this.baseDeDadosFuncionarios.retornarFuncionarioPorIndice(indiceDoFuncionario);
  }

  public buscarIndicePorNome(nomeDoFuncionario: string): number | undefined {
    return this.baseDeDadosFuncionarios.retornarIndicePorNome(nomeDoFuncionario);
  }

  public listarTodosFuncionarios(): void {
    return this.baseDeDadosFuncionarios.listarTodosFuncionarios();
  }

  public calcularFolhaDePagamento(): number {
    return this.baseDeDadosFuncionarios.valorTotalDeTodosSalarios();
  }

  public removerFuncionario(nome: string): void {
    return this.baseDeDadosFuncionarios.deletarFuncionarioPorNome(nome);
  }

}