import { Status } from "./enums/Status";

export class Tarefa {
  
  private titulo: string;
  private descricao: string;
  private responsavel: string;
  private status: Status = Status.EmAndamento; 

  constructor(
    titulo: string,
    descricao: string,
    responsavel: string,
  ) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.responsavel = responsavel;
  }

  public designarResponsavel(nomeResponsavel: string): void {
    this.responsavel = nomeResponsavel;
  }

  public concluirTarefa(): void {
    this.status = Status.Concluido;
  }

  // Getters
  public getTitulo(): string {
    return this.titulo;
  }
  public getDescricao(): string {
    return this.descricao;
  }
  public getResponsavel(): string {
    return this.responsavel;
  }
  public getStatus(): Status {
    return this.status;
  }
  public getStringStatus(): string {
    let valorStatus: string = this.status;
    return valorStatus;
  }

}