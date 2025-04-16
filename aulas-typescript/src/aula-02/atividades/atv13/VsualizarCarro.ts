/**
 * 2.1 - Criando um Objeto Simples: 
 * Crie um objeto chamado carro que tenha as propriedades marca (string) e ano (number). 
 * Exiba essas propriedades no console.
 */

export class VisualizarCarro {
  
  private carro: {marca: string, ano: number};

  constructor(marca: string, ano: number) {
    this.carro = {
      marca: marca,
      ano: ano,
    };
  }

  public exibirPropriedadesCarro(): string {
    return "Carro:" + 
           "\n> Marca: " + this.carro.marca +
           "\n> Ano: " + this.carro.ano;
  }
  
}
