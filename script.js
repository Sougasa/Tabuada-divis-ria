function gerarTabuada() {
    var numero = parseInt(document.getElementById("numero").value);
    var tabuadaBody = document.getElementById("tabuadaBody");
    var tabuadaTable = document.getElementById("tabuadaTable");

    tabuadaBody.innerHTML = ""; // Limpa o conteúdo anterior da tabuada

    if (numero <= 0 || isNaN(numero)) {
        alert("Por favor, insira um número positivo antes de gerar a tabuada.");
        return;
    }

    for (var m = 1; m <= 10; m++) {
        var r = m / numero;
        var operacao = `${numero} / ${m} = ${r.toFixed(2)}`;
        var newRow = tabuadaBody.insertRow();
        var cellOperacao = newRow.insertCell(0);
        cellOperacao.textContent = operacao;
    }

    tabuadaTable.style.display = "block"; // Mostra a tabela da tabuada
}
