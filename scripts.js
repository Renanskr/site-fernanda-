function openCalculator(type) {
    const output = document.getElementById('calculator-output');
    if (type === 'budget') {
        output.innerHTML = `
            <h3>Planejador de Orçamento</h3>
            <p>Preencha os campos para calcular seu saldo:</p>
            <input type="number" placeholder="Renda Mensal" id="income">
            <input type="number" placeholder="Despesas Totais" id="expenses">
            <button onclick="calculateBudget()">Calcular</button>
        `;
    } else if (type === 'investment') {
        output.innerHTML = `
            <h3>Simulador de Investimentos</h3>
            <p>Simule seus ganhos com base no tempo e juros:</p>
            <input type="number" placeholder="Valor Inicial" id="principal">
            <input type="number" placeholder="Taxa Anual (%)" id="rate">
            <input type="number" placeholder="Anos" id="years">
            <button onclick="calculateInvestment()">Simular</button>
        `;
    }
}

function calculateBudget() {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    alert(`Seu saldo mensal é: R$${(income - expenses).toFixed(2)}`);
}

function calculateInvestment() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);
    const futureValue = (principal * Math.pow(1 + rate, years)).toFixed(2);
    alert(`Valor Futuro do Investimento: R$${futureValue}`);
}
