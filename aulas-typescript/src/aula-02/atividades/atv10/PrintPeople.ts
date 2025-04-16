/**
 * 8. Desestruturação de Objetos: 
 * Crie um objeto person com propriedades name e age. 
 * Em seguida, use a desestruturação para extrair esses valores e exibi-los no console.
 */

import { Person } from "./model/Person";

const pessoa = new Person("Augusto", 25);
const {name, age} = pessoa;

console.log("Dados de Pessoa:")
console.log("Name: " + name);
console.log("Age: " + age);
