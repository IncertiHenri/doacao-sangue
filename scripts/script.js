document.getElementById("doacaoSangue").addEventListener("submit", function (e) {

    let nome = document.getElementById("nome").value;
    if(nome === "") return alert("Insira seu nome!");
    if(nome.length < 10) return alert("Insira o seu nome completo!");
    
    let email = document.getElementById("email").value;
    if(email === "") return alert("Insira um E-mail!");
    if(!email.includes("@")) return alert("Insira um E-mail válido!");

    let idade = document.getElementById("idade").value;
    if(idade === "") return alert("Insira sua idade!");
    if(idade < 16) return alert("Você não tem idade mínima para a doação de sangue!");

    let peso = document.getElementById("peso").value;
    if(peso === "") return alert("Insira seu peso!");
    if(peso < 50) return alert("Você não tem peso suficiente para doar sangue!");

    let tipoSanguineo = document.getElementById("tipoSanguineo").value;
    if(tipoSanguineo === "") return alert("Insira seu tipo sanguíneo!");

    let tel = parseFloat(document.getElementById("tel")).value;
    if(tel === "") return alert("Insira seu telefone!");
    if(isNaN(tel)) return alert("Insira um telefone válido!");

    let cidade = document.getElementById("cidade").value;
    if(cidade === "") return alert("Insira sua cidade!");

    let estado = document.getElementById("estado").value;
    if(estado === "") return alert("Insira seu estado!");

});