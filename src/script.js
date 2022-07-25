let grades = [9, 10, 8, 2, 1, 9, 0, 6, 7, 3, 8]


function aboveAverageGrades(notas) {

    let acimaDaMedia = []

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > 8){
            acimaDaMedia.push(notas[i])
        }
    }
    return acimaDaMedia
}
console.log(aboveAverageGrades(grades))

function averageGrades(notas) {
    notasNaMedia = []

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] === 8){
            notasNaMedia.push(notas[i])
        }
    }
  
    return notasNaMedia
}
console.log(averageGrades(grades));

function belowAverageGrades(notas) {

    notasAbaixoDaMedia = []

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 8) {
            notasAbaixoDaMedia.push(notas[i])
        }
    }
    return notasAbaixoDaMedia
}
console.log(belowAverageGrades(grades));

function sumOfAllGrades(notas) {

    let somaTotal = 0
   
    for (let i = 0; i < notas.length; i++) {
 
        somaTotal += notas[i]
    }
    return somaTotal
}
console.log(sumOfAllGrades(grades));

function averageOfGrades(notas) {

    let media = []

    for (let i = 0; i< notas.length; i++) {
       media = sumOfAllGrades(notas)/notas.length
    }
    return media
}
console.log(averageOfGrades(grades));

function maxGrade(notas) {

    let maximo = Math.max(...notas)
    return maximo
}
console.log(maxGrade(grades));

function minGrade(notas) {

    let min = Math.min(...notas)
    return min
}
console.log(minGrade(grades));
