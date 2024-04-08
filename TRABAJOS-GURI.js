function calculaPonderado(nota1, nota2, nota3, peso1, peso2, peso3) {
    const SomaDasNotas = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);
    return SomaDasNotas;
}

// Função para manipular o envio do formulário
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obtém os valores dos campos de entrada
    const peso1 = parseFloat(document.getElementById("peso1").value);
    const peso2 = parseFloat(document.getElementById("peso2").value);
    const peso3 = parseFloat(document.getElementById("peso3").value);
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    // Calcula a média ponderada
    const resultado = calculaPonderado(nota1, nota2, nota3, peso1, peso2, peso3);

    // Exibe o resultado no campo de saída
    document.getElementById("resultado").value = resultado.toFixed(2);
});
