/**
 * 2.02 - Propriedades Opcionais: 
 * Crie um objeto usuario com as propriedades nome (string) e email (opcional). 
 * Exiba os valores no console.
 */

export class CadastroDeUsuario {

  private usuario: {
    nome: string,
    email?: string
  }

  constructor(nome: string, email?: string) {
    this.usuario = {
      nome: nome,
      email: email
    }
  }

  public exibirDadosUsuario(): string {
    return "Usuario:" +
           "\nNome: " + this.usuario.nome +
           "\nEmail: " + this.usuario.email +
           "\n";
  }

}