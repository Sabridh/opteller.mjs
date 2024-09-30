import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som;
let deling;
let product;
let verschil;

let getal1 = parseFloat(await userInput.question('45'));
let getal2 = parseFloat(await userInput.question('22'));          

som = getal1 + getal2;

console.log(som);
