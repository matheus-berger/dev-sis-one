/**
 * Documento contendo funcionalidades para:
 * - Input de dados pelo terminal.
 */

import * as readline from "readline";

/**
 * Interface para receber dados do usuario no terminal.
 */
export const input = readline.createInterface({
  input: process.stdin
});
