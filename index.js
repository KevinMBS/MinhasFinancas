google.charts.load('current', { packages: [ 'corechart' ] })
google.charts.setOnLoadCallback(desenhaTodosGraficos)

function desenhaTodosGraficos(){
  desenharGraficoGastosUltimoMes()
  desenharGraficoSaldos()
}

function desenharGraficoSaldos() {
    const container = document.querySelector('#graficoEvolucaoSaldos')
    const data = new google.visualization.arrayToDataTable([
        [ 'Mes', 'Conta 1', 'Conta 2' ],
        [ 'Janeiro', 10000, 3000],
        [ 'Fevereiro', 9000, 2000 ],
        [ 'Março', 8000, 4000 ],
        [ 'Abril', 5000, 3500 ],
        [ 'Maio', 2000, 5000 ]
    ])
    const options = {
        title: 'Evoluçao saldos',
        prefix: 'R$',
    }
    const chart = new google.visualization.LineChart(container)
    chart.draw(data, options)
}

function desenharGraficoGastosUltimoMes() {
    const container = document.querySelector('#graficoGastosUltimoMes')
    const data = new google.visualization.arrayToDataTable([
        [ 'Categoria', 'Conta 1'],
        [ 'Combustível', 10000],
        [ 'Alimentação', 9000],
        [ 'Hobbies', 8000],
        [ 'Médico', 5000],
        [ 'Ensino', 2000]
    ])
    const options = {
        title: 'Gastos Ultimo Mês',
        prefix: 'R$',
    }
    const chart = new google.visualization.PieChart(container)
    chart.draw(data, options)
}
