// let condicao = true;

// if (condicao) {
//   // bloco de condição verdadeiro
// } else {
//   // bloco de condição falso
// }

// const idade = 30;

// if (idade >= 18) {
//   console.log("É maior de idade");
// } else {
//   console.log("É menor de idade");
// }

// Precisa veriificar se a pessoa é maior de idade e possui habilitação
// Se possuir habilitação pode dirigir
// Se for maior de idade e não possuir habilitação, ela pode fazer a prova de habilitação

// const idade = Number(prompt("Qual é a sua idade:"));

// if (idade < 18) {
//   alert("Só a partir de 18 anos pode tirar habilitação");
//   return;
// }

// const possuiHabilitacao = prompt("Possui habilitação? Responsa SIM ou NAO");

//.toUperCase() ou .toLowerCase()

// if (idade >= 18 && possuiHabilitacao.toUpperCase() === "SIM") {
//   console.log("Pode dirigir");
// } else {
//   console.log("Não pode dirigir");
// }

// else if

const idade = Number(prompt("Digite sua idade"))

function descobrirFaixa (idade) {
    if (idade <= 0) {
        console.log("Digite uma idade valida")
        return
    }


    if (idade <= 12) {
        console.log("Criança")
    } else if (idade >= 12 && idade < 18) {
        console.log("Adolescente")
    } else if (idade >= 18 && idade < 60) {
        console.log("Adulto")
    } else if (idade >= 60) {
        console.log("Idoso")
    } else {
        console.log("Erro na verificação")
    }
        
}

descobrirFaixa(idade)