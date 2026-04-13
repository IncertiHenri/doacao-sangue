let listaDoacoes = [];

document.getElementById("doacaoSangue").addEventListener("submit", function (e) {

    e.preventDefault(); 

    let falha = false;

    let nome = document.getElementById("nome").value.trim();
    let partes = nome.split(" ");
    if (partes === "") {
        alert("Insira seu nome!");
        falha = true;
        return false;
    }
    if (partes.length < 2) {
        alert("Insira o seu nome completo!");
        falha = true;
        return false;
    }

    let email = document.getElementById("email").value;
    if (email === "") {
        alert("Insira um E-mail!");
        falha = true;
        return false;
    }
    if (!email.includes("@")) {
        alert("Insira um E-mail válido!");
        falha = true;
        return false;
    }

    let idade = document.getElementById("idade").value;
    if (idade === "") {
        alert("Insira sua idade!")
        falha = true;
        return false;
    }
    if (idade < 16) {
        alert("Você não tem idade mínima para a doação de sangue!");
        falha = true;
        return false;
    }

    let peso = document.getElementById("peso").value;
    if (peso === "") {
        alert("Insira seu peso!");
        falha = true;
        return false;
    }
    if (peso < 50) {
        alert("Você não tem peso suficiente para doar sangue!");
        falha = true;
        return false;
    }

    let tipoSanguineo = document.getElementById("tipoSanguineo").value;
    if (tipoSanguineo === "") {
        alert("Insira seu tipo sanguíneo!");
        falha = true;
        return false;
    }

    let tel = parseFloat(document.getElementById("tel").value);
    if (isNaN(tel)) {
        alert("Insira um telefone válido!");
        falha = true;
        return false;
    }

    let cidade = document.getElementById("cidade").value;
    if (cidade === "") {
        alert("Insira sua cidade!");
        falha = true;
        return false;
    }

    let estado = document.getElementById("estado").value;
    if (estado === "") {
        alert("Insira seu estado!");
        falha = true;
        return false;
    }

    if (falha) {
        e.preventDefault();
        return;
    }

    let doacao = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        telefone: tel,
        cidade: cidade,
        estado: estado
    };

    listaDoacoes.push(doacao);

    console.log(listaDoacoes);

    alert("Cadastro realizado com sucesso!");
});