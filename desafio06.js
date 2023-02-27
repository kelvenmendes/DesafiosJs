//Crie um programa que receba um valor positivo 
//inteiro e imprime os divisores desse valor em js



let numero = prompt("Por favor, digite um valor inteiro positivo:");
let divisores = [];

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    divisores.push(i);
  }
}

console.log(`Os divisores de ${numero} são: ${divisores.join(", ")}.`);