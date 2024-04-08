

const peso1= 2, peso2 = 3, peso3 =  5; 

const nota1 = 8, nota2 = 4, nota3 = 6;
let resultado = calculaPonderado (nota1,nota2,nota3,peso1,peso2,peso3);
function calculaPonderado (nota1,nota2,nota3,peso1,peso2,peso3) {
    const SomaDasNotas = ((nota1*peso1) + (nota2*peso2) + (nota3*peso3))/(peso1+peso2+peso3);
    return SomaDasNotas;
};

console.log(resultado)