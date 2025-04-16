/**
 * 2.04. Tipo Personalizado: 
 * Crie um tipo Livro com as propriedades titulo, autor e ano. 
 * Depois, crie um objeto que siga esse tipo.
 */

type Livro = {
  titulo: string,
  autor: string, 
  ano: number
}

export let CadastroLivro: Livro = {
  titulo: "O Senhor dos Aneis",
  autor: "J.R.R Tolkien",
  ano: 1954
}

