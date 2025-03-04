
import { Tarefa } from "./Tarefa";
import { Status } from "./enums/Status";

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

  public listarTodasTarefas(): void {
    for (const tarefa of this.tarefas) {
      console.log("- Tarefa: ");
      console.log(`Titulo: ${tarefa.getTitulo()} |\nResponsavel: ${tarefa.getResponsavel()} |\nDescricão: ${tarefa.getDescricao()} |\nStatus: ${tarefa.getStringStatus()}`);
    }
  }

  public listarPorResponsavel(nomeResponsavel: string): void {
    for (const tarefa of this.tarefas) {
      if (tarefa.getResponsavel() == nomeResponsavel) {
        console.log("- Tarefa: ");
        console.log(`Titulo: ${tarefa.getTitulo()} |\nResponsavel: ${tarefa.getResponsavel()} |\nDescricão: ${tarefa.getDescricao()} |\nStatus: ${tarefa.getStringStatus()}`);
      }
    }
  }

  public listarPorStatus(status: Status): void {
    for (const tarefa of this.tarefas) {
      if (tarefa.getStatus() == status) {
        console.log("- Tarefa: ");
        console.log(`Titulo: ${tarefa.getTitulo()} |\nResponsavel: ${tarefa.getResponsavel()} |\nDescricão: ${tarefa.getDescricao()} |\nStatus: ${tarefa.getStringStatus()}`);
      }
    }
  }

  public concluirTarefa(indiceTarefa: number): void {
    this.tarefas[indiceTarefa].concluirTarefa();
  }

  // Getters
  public getNome(): string {
    return this.nome;
  }
  public getTarefas(): Tarefa[] {
    return this.tarefas;
  }

}