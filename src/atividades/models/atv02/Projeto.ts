
import { Tarefa } from "./Tarefa";

export class Projeto {

  private nome: string;
  private tarefas: Tarefa[] = [];

  public constructor(
    nome: string,
  ) {
    this.nome = nome;
  };

  public adicionarTarefa(tarefa: Tarefa): void {
    this.tarefas.push(tarefa)
  }

}