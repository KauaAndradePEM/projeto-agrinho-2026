// Seleção de elementos do Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu a');

// Evento para abrir/fechar menu mobile ao clicar no "hambúrguer"
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar o menu quando um link for clicado (melhor usabilidade)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Manipulação do envio do Formulário de Contato
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura os valores digitados
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Aqui você integraria com um servidor. Por enquanto, simula um envio de sucesso.
    if (nome && email && mensagem) {
        alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre o tema Agrinho Sustentável foi enviada com sucesso.`);
        contactForm.reset(); // Limpa o formulário
    } else {
        alert('Por favor, preencha todos os campos do formulário.');
    }
});