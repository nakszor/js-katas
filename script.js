
function calculateSalary(salary, totalSales) {
    let salarioMaisComissao = 0
    if (totalSales <= 1200){
        salarioMaisComissao = salary + (totalSales * 0.03)
        return salarioMaisComissao
    } else {
        salarioMaisComissao = salary + (totalSales - 1200 * 0.05) + (1200 * 0.03)
        return salarioMaisComissao
    } 
}
calculateSalary()
function cashMachine (valorDoSaque,valorDoSalario, vendasFeitas) {
     let salario = calculateSalary(valorDoSalario,vendasFeitas) 
     let retorno = "notas sacadas: "
     let resto = valorDoSaque
     if (salario >= valorDoSaque) {
        if(resto >= 200){
        retorno +=  ` ${Math.floor(resto/200)} notas de 200.`    
        resto = resto - Math.floor(resto/200) * 200    } 
        if(resto >= 100){
            retorno +=  ` ${Math.floor(resto/100)} notas de 100.`    
            resto = resto - Math.floor(resto/100) * 100
        } 
        if(resto >= 50){
            retorno +=  ` ${Math.floor(resto/50)} notas de 50.`    
            resto = resto - Math.floor(resto/50) * 50
        }
        if(resto >= 20){
            retorno +=  ` ${Math.floor(resto/20)} notas de 20.`    
            resto = resto - Math.floor(resto/20) * 20
        }
        if(resto >= 10){
            retorno +=  ` ${Math.floor(resto/10)} notas de 10.`    
            resto = resto - Math.floor(resto/10) * 10
        }
        if(resto >= 5){
            retorno +=  ` ${Math.floor(resto/5)} notas de 5.`    
            resto = resto - Math.floor(resto/5) * 5
        }  
        if(resto >= 2){
            retorno +=  ` ${Math.floor(resto/2)} notas de 2.`    
            resto = resto - Math.floor(resto/2) * 2
        } else{
            if (resto > 0) {
                retorno+= `. Não foi possível sacar ${resto}.`
            }
            retorno += ` . Saldo atual: ${salario - valorDoSaque}.`
        }
        } else{
            return 'Saldo insuficiente'
        } return retorno
}
cashMachine()
function calculateStock(stock,maxStock,minStock) {
    let quantidadeMedia = 0
    quantidadeMedia = maxStock + minStock/2
    if (stock >= quantidadeMedia) {
        return 'Não efetuar compra'
    } else {
        return 'Efetuar compra'
    }
}
calculateStock()
function calculateAge(anoNascimento,anoAtual){
    let idadeEmAnos = anoAtual - anoNascimento
    let idadeEmMeses = idadeEmAnos * 12
    let idadeEmDias = idadeEmAnos * 365
    let idadeEmSemanas = idadeEmMeses * 4 
    let retorno = `anos: ${idadeEmAnos} anos. Meses: ${idadeEmMeses} meses. Semanas: ${idadeEmSemanas} semanas. Dias: ${idadeEmDias} dias.`
    return retorno 
}
calculateAge()

let matrizQuadrada = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ]
function getDiagonal(array) {
 let retorno = []
for (let index = 0; index < array.length; index++) {

    for (let j = 0; j < array[index].length; j++) {
        if(index === j){
            retorno.push(array[index][j])
        }
    }
} return retorno
}
getDiagonal(matrizQuadrada)