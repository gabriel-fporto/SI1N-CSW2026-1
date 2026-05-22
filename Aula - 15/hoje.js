document.writeln('Olá, Mundo!!');

// window.alert('Olá Mundo, seu lindo');

document.getElementById('Titulo').innerHTML = "Olá Mundo JavaScript";
let nomePrompt = '' //window.prompt("Olá aluno de JavaScript, qual o seu nome?")
let resposta = false

document.getElementById('nomeAluno').innerHTML = ("O nome do aluno JavaScript é: " + nomePrompt)     

let resposta = //window.confirm("Você gosta de JavaScript?")

if (resposta) {
    document.getElementById('nomeAluno').innerHTML = ("O aluno " + nomePrompt + " gosta de Javascript");
}
else {
    document.getElementById('nomeAluno').innerHTML = ("O aluno " + nomePrompt + " NÃO gosta de Javascript");
}

function exibeNomeAluno() {
    let inputAluno = document.getElementById('inputNomeAluno').value;

    document.getElementById("resposta").innerHTML = "O nome digitado foi: " + inputAluno;
}