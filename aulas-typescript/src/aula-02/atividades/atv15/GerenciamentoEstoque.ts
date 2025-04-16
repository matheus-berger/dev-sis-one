/**
 * 2.03 - Propriedades Dinâmicas: 
 * Crie um objeto produto que tenha uma propriedade fixa nome (string) 
 * e permita armazenar propriedades adicionais dinâmicas.
 */

export class GerenciamentoEstoque {

  private produto: {
    nome: string,
    [propriedadeExtra: string]: any
  }

  constructor(nome: string, ...propriedadeExtra: any) {
    this.produto = {
      nome: nome,
      propriedadeExtra: propriedadeExtra
    }
  }

  public printProduto(): void {
    console.log(this.produto);
  }

}