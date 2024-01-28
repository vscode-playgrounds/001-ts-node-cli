import { question } from "readline-sync";

const message: string = 'Hello World';
console.log(message);

const name: string = question('What is your name? ');
console.log(`Hello ${name}!`);
