const dimensoes = [
    {altura:10, comprimento:20},
    {altura:2, comprimento:4},
    {altura:1, comprimento:1},
    {altura:50, comprimento:50}
]

function calcularArea(dimensoes) {
    let areaTotal = 0;

    dimensoes.forEach(dimensao => {
        let area = dimensao.altura * dimensao.comprimento;
        areaTotal += area;
    });

    return areaTotal;
}

console.log(calcularArea(dimensoes)); // 2709
