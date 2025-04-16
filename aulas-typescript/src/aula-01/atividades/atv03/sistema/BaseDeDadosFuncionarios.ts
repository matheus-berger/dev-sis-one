import { Funcionario } from "../models/entity/Funcionario";

export class BaseDeDadosFuncionarios {

  private funcionarios: Funcionario[];

  constructor() {
    this.funcionarios = [];
  }

  public adicionarFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
  }
  
  public retornarIndicePorNome(nome: string): number | undefined {
    const indiceDoFuncionario: number | undefined = this.funcionarios.findIndex(
      (funcionario) => funcionario.getNome() === nome
    );

    if (indiceDoFuncionario) {
      return indiceDoFuncionario;
    } else {
      console.error("[X-- >] Funcionario de nome " + nome + " não encontrado!");
    }

  }

  public retornarFuncionarioPorNome(nome: string): Funcionario | undefined {
    const funcionario: Funcionario | undefined = this.funcionarios.find(
      (funcionario) => funcionario.getNome() === nome
    );

    if (funcionario) {
      return funcionario;
    } else {
      console.error("[X-- >] Funcionario de nome " + nome + " não encontrado!");
    }
  }

  public retornarFuncionarioPorIndice(indiceDoFuncionario: number): Funcionario | undefined {
    return this.funcionarios[indiceDoFuncionario];
  }

  public listarTodosFuncionarios(): void {

    if (this.funcionarios.length === 0){
      console.log("-> Não há nenhum funcionario cadastrado neste momento.");
    } else {
      this.funcionarios.forEach(
        (funcionario) => console.log(
          "Nome: " + funcionario.getNome() + " | " +
          "Cargo: " + funcionario.getCargo() + " | " +
          "Salario: " + "R$ " + funcionario.getSalario() + " |;"
        )
      );
    }

  }

  public valorTotalDeTodosSalarios(): number {
    let totalValor: number = 0.00;
    
    if (this.funcionarios.length === 0){
      console.log("-> Não há nenhum funcionario cadastrado neste momento.");
    } else {
      this.funcionarios.forEach(
        (funcionario) => totalValor = totalValor + funcionario.getSalario()
      );
    }

    return Math.round(totalValor * 100) / 100;

  }

  public deletarFuncionarioPorNome(nome: string): void {
    
    const indiceDoFuncionario = this.retornarIndicePorNome(nome);

    if (indiceDoFuncionario) {
      this.funcionarios.splice(indiceDoFuncionario, 1);
      console.log("[Ok-- >] Funcionario de nome: " + nome + " removido com sucesso!");
    }

  }

  public alterarFuncionarioPorIndice(indiceDoFuncionario: number, funcionario: Funcionario) {
    this.funcionarios[indiceDoFuncionario] = funcionario;
  }

}