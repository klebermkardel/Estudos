// letterCounter.js
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const countLetter = () => {
    const phrase = removeAccents(document.getElementById('phrase').value);
    const letterToCheck = document.getElementById('letter').value.toLowerCase(); 
    let count = 0;

    for (let i = 0; i < phrase.length; i++) {
        const currentLetter = phrase[i].toLowerCase();
        if (currentLetter === letterToCheck) {
            count++;
        }
    }

    const resultParagraph = document.getElementById('result');
    resultParagraph.textContent = `A letra "${letterToCheck}" aparece ${count} vezes na frase.`;
};
