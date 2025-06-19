alert(`Boas vindas! Esse é um jogo de advinhação.
    -Esse jogo pode ser jogado por 1 player ou 2 players.`)
let quantidadePlayers = prompt(`Digite a quantidade de players: `)
// let numSecreto = parseInt(Math.random() * 100 + 1)
let numSecreto = 5
let numDigitado = 0
let tentativas = 0

while (quantidadePlayers > 2){
    alert(`Quantidade de players inválido!
       -Digite apenas 1 ou 2 players.`)
    quantidadePlayers = prompt(`Digite a quantidade de players: `)
}

if(quantidadePlayers == 1){
    alert(`O jogo começou, tente adivinhar um número entre 1 e 100`)
    numDigitado = prompt(`Digite um número:`)

    while(numDigitado != numSecreto){
        if(numDigitado > 100){
            alert(`Número digitado maior que 100!
                Digite um número entre 1 e 100.`)
        }else if(numDigitado > numSecreto){
            alert(`Número digitado é MAIOR que o número secreto`)
            numDigitado = prompt(`Digite um número:`)
            tentativas += 1
        }else{
            alert(`Número digitado é MENOR que o número secreto`)
            numDigitado = prompt(`Digite um número:`)
            tentativas += 1
        }
    }

}else{
    let nomePlayer1 = prompt(`Digite o nome do player 1: `)
    let nomePlayer2 = prompt(`Digite o nome do player 2: `)

    let jogadorComeca = prompt(`Digite o nome de quem vai começar o jogo digitando o número secreto: `)

    while (jogadorComeca != nomePlayer1 && jogadorComeca!=nomePlayer2){
       jogadorComeca = prompt(`Digite o nome do player correto`)
    }

    if (jogadorComeca == nomePlayer1){
        let numPlayer1 = prompt(`${nomePlayer1} começa digitando um número entre 1 e 100`)
     
        while(numPlayer1 > 100){
            alert(`Número Digitado maior que 100
                -Digite um número entre 1 e 100`)
            numPlayer1 = prompt(`${nomePlayer1} começa digitando um número entre 1 e 100`)
        }

        let numPlayer2 = prompt(`${nomePlayer2} advinhe o número digitado pelo ${nomePlayer1}`)

        while(numPlayer2 != numPlayer1){
            if(numPlayer2 > 100){
                alert(`Número digitado maior que 100!
                    Digite um número entre 1 e 100.`)
            }else if(numPlayer2 > numPlayer1){
                alert(`Número digitado é MAIOR que o número secreto`)
                numPlayer2 = prompt(`Digite um número:`)
                tentativas += 1
            }else{
                alert(`Número digitado é MENOR que o número secreto`)
                numPlayer2 = prompt(`Digite um número:`)
                tentativas += 1
            }
        }

    }
    
}

    tentativas += 1
    let palavraTentativa = tentativas == 1 ? `Tentativa` : `Tentativas`
    alert(`Parabéns você acertou o número secreto
        Número secreto: ${numSecreto}
        ${palavraTentativa}: ${tentativas}`)