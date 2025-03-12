/**
  * [UTILIZE PARA EXECUTAR]: npm run gerenciador_tarefas_colaborativo
  * 
  * 
  * [02. ] ~ Gerenciador de Tarefas Colaborativo
  *
  * O Gerenciador de Tarefas Colaborativo é uma aplicação em TypeScript que permite 
  * a colaboração entre membros de uma equipe para gerenciar e acompanhar as tarefas do projeto. 
  * Uma plataforma de gerenciamento de tarefas flexível e fácil de usar, que utiliza: 
  *   - Tipagem estática; 
  *   - Objetos;
  *   - Estruturas condicionais e de repetição; 
  *   - Desestruturação; 
  *   - Template literals;
  *   - Funções; 
  * 
  * Funcionalidades:
  *
  *    1. Adicionar uma nova tarefa com título, descrição, responsável e status.
  *    2. Designar responsáveis por tarefas.
  *    3. Marcar tarefas como concluídas.
  *    4. Visualizar todas as tarefas do projeto.
  *    5. Filtrar tarefas por responsável ou status.
  *
  */

// Imports
import { Status } from "./models/enums/Status";
import { Projeto } from "./models/Projeto";
import { Tarefa } from "./models/Tarefa";


// Criando um projeto
console.log("[> ] Criando novo projeto...")
const projeto1: Projeto = new Projeto(
  "Primeira Interface da Aplicação."
);

// Adicionando tarefas:
console.log("[> ] Adicionando tarefas ao projeto...")
const tarefa1: Tarefa = new Tarefa(
  "Criação tela de login.",
  "Consumir api rest e validar dados de login; Criar interface com TS, JS, HTML e Bootstrap.",
  "Arthur Zimmer"
);
const tarefa2: Tarefa = new Tarefa(
  "Criação tela de Cadastro.",
  "Consumir api rest e validar dados de cadastro; Criar interface com TS, JS, HTML e Bootstrap.",
  "Clara Xavier"
);
const tarefa3: Tarefa = new Tarefa(
  "Criação tela de Boas Vindas.",
  "Validar acesso utilizando token de Usuario; Criar interface com TS, JS, HTML e Bootstrap.",
  "Arthur Zimmer"
);
const tarefa4: Tarefa = new Tarefa(
  "Criar interface simples para o site da plataforma.",
  "Criar a interface comforme os requisitos e com botões de cadastro e login; Criar interface com TS, JS, HTML e Bootstrap.",
  "Clara Xavier"
);

projeto1.adicionarTarefa(tarefa1);
projeto1.adicionarTarefa(tarefa2);
projeto1.adicionarTarefa(tarefa3);
projeto1.adicionarTarefa(tarefa4);

// Listando todas as tarefas:
console.log(`\n[> ] Listando todas as tarefas do projeto ${projeto1.getNome()}:`)
projeto1.listarTodasTarefas();

// Concluindo tarefas:
console.log("\n[> ] Concluindo as duas primeiras tarefas...")
for (let i = 0; i < 2; i++) {
  projeto1.concluirTarefa(i);
}

// Listando todas as tarefas por responsavel
console.log(`\n[> ] Listando todas as tarefas de responsabilidade de Clara Xavier:`)
projeto1.listarPorResponsavel("Clara Xavier");

// Listando todas as tarefas por status
console.log("\n[> ] Listando todas as tarefas concluidas:")
projeto1.listarPorStatus(Status.Concluido);
