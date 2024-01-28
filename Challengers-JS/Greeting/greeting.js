const greet = () => {
    const nome = document.getElementById('name').value;
    const greetingParagraph = document.getElementById('greeting');
    greetingParagraph.textContent = `Olá, ${nome}`;
};