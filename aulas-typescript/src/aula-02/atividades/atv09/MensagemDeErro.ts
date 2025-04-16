/**
 * Uso de Never:
 * Crie uma função chamada errorMessage 
 * que sempre lança um erro com a mensagem "Erro crítico!".
 */

function errorMessage(): never {
  throw new Error("Erro crítico!");
}

errorMessage();
