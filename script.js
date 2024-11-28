// Função para calcular a média de notas
function calcularMedia() {
    const nome = document.getElementById('nomeAluno').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Por favor, insira todas as notas corretamente.');
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    document.getElementById('resultadoMedia').textContent = `A média do aluno ${nome} é: ${media.toFixed(2)}`;
}

// Função para calcular o preço do produto com desconto e imposto
function calcularPrecoProduto() {
    const nomeProduto = document.getElementById('nomeProduto').value;
    const precoProduto = parseFloat(document.getElementById('precoProduto').value);
    const desconto = parseFloat(document.getElementById('desconto').value);
    const imposto = parseFloat(document.getElementById('imposto').value);

    if (isNaN(precoProduto) || isNaN(desconto) || isNaN(imposto)) {
        alert('Por favor, insira todos os valores corretamente.');
        return;
    }

    const descontoValor = precoProduto * (desconto / 100);
    const impostoValor = precoProduto * (imposto / 100);
    const precoComDesconto = precoProduto - descontoValor;
    const precoFinal = precoComDesconto + impostoValor;

    document.getElementById('resultadoProduto').innerHTML = `
        O preço do produto "${nomeProduto}" após o desconto de ${desconto}% é: R$ ${precoComDesconto.toFixed(2)}<br>
        Impostos de ${imposto}%: R$ ${impostoValor.toFixed(2)}<br>
        Preço final a pagar: R$ ${precoFinal.toFixed(2)}
    `;
}