/**
 * [UTILIZE PARA EXECUTAR]: npm run sistema_gestao_funcionarios
 * 
 * 
 * [03. ] ~ Sistema de Gestão de Funcionários
 *
 * O Sistema de Gestão de Funcionários é uma aplicação em TypeScript 
 * projetada para ajudar empresas a gerenciar informações sobre seus funcionários. 
 * 
 * Para oferecer um sistema robusto e flexível, ele utiliza:
 *  v- Objetos, 
 *  - Arrow functions, 
 *  v- Funções, 
 *  v- Higher-Order functions (HOFs), 
 *  v- Interfaces, 
 *  - Generics 
 *  - Try/catch 
 *
 * Funcionalidades:
 *
 * v- Adicionar novo funcionário com nome, cargo e salário.
 * v- Remover funcionário existente.
 * v- Atualizar informações de um funcionário. 
 * v- Visualizar todos os funcionários.
 * v- Calcular a folha de pagamento total da empresa.
 *
 */


import { Funcionario } from "./models/entity/Funcionario";
import { SistemaDeGestão } from "./sistema/SistemaDeGestao";

console.log("[!-- >] Criando Sistema de Gestão...");
const sistemaGestaoFuncionarios: SistemaDeGestão = new SistemaDeGestão();

console.log("==================================");
console.log("==           Bem Vindo          ==");
console.log("==================================");
console.log("/n")

console.log("[*-- >] Adicionando funcionarios:")
sistemaGestaoFuncionarios.contratarFuncionario("Arthur Zimmer", "Desenvolvedor Fullstack Junior", 3500);
sistemaGestaoFuncionarios.contratarFuncionario("Benjamin Yousef", "Desenvolvedor Backend Pleno", 4500);
sistemaGestaoFuncionarios.contratarFuncionario("Clara Xavier", "Desenvolvedor Front-end Estagiário", 1050);
sistemaGestaoFuncionarios.contratarFuncionario("Daniele Wansing", "Analisata de Qualidade Pleno", 4500);
sistemaGestaoFuncionarios.contratarFuncionario("Eduarda Valadão", "Auxiliar Administrativo Estagiario", 1050);

console.log("[*-- >] Removendo funcionário existente:")
sistemaGestaoFuncionarios.removerFuncionario("Eduarda Valadão");

console.log("[*-- >] Atualizando informações de funcionários:");
function atualizarFuncionario(nome: string, novoNome?: string, cargo? : string, salario?: number) {
  let indiceDoFuncionario: number | undefined = sistemaGestaoFuncionarios.buscarIndicePorNome("Benjamin Yousef");
  if (indiceDoFuncionario) {
    let funcionario: Funcionario | undefined = sistemaGestaoFuncionarios.buscarFuncionarioPorIndice(indiceDoFuncionario);
    if (funcionario) {
      if (novoNome) {funcionario.setNome(novoNome)};
      if (cargo) {funcionario.setCargo(cargo)};
      if (salario) {funcionario.setSalario(salario);}
      sistemaGestaoFuncionarios.atualizarInformacoesDeFuncionario(indiceDoFuncionario, funcionario);
    } else {
      console.log("Não foi possivel encontrar o funcionario de indice: " + indiceDoFuncionario);
    }
  } else {
    console.log("Nenhum funcionário com nome de ");
  }
}
atualizarFuncionario;





