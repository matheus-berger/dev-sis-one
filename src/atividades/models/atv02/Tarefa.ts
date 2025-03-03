import { Status } from "./enums/Status";

export class Tarefa {
  
  private titulo: string;
  private descricao: string;
  private responsavel: string;
  private status: Status; 

  constructor(
    titulo: string,
    descricao: string,
    responsavel: string,
    status: Status
  ) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.responsavel = responsavel;
    this.status = status;
  }

}