// script.js

// Seleciona o formulário
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // impede envio automático

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();

    // Validação básica
    if (nome === "" || email === "" || cpf === "") {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    // Validação de e-mail simples
    if (!email.includes("@")) {
        alert("Digite um e-mail válido!");
        return;
    }

    // Validação de CPF simplificada
    if (cpf.length !== 11) {
        alert("CPF deve ter 11 números!");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    form.reset(); // limpa o formulário
});
