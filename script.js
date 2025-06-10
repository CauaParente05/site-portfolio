document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('botao-de-troca');
    const speakButton = document.getElementById('falar');
    const body = document.body;

    function getPageContent() {
        const main = document.querySelector('main');
        return main ? main.innerText : '';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('modo-escuro');
        body.classList.toggle('modo-claro');

        const currentMode = body.classList.contains('modo-claro') ? 'claro' : 'escuro';
        localStorage.setItem('theme', currentMode);
    });

    speakButton.addEventListener('click', () => {
        const contentToSpeak = getPageContent();
        if ('speechSynthesis' in window && contentToSpeak) {
            const utterance = new SpeechSynthesisUtterance(contentToSpeak);
            utterance.lang = 'pt-BR';
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Seu navegador não suporta a leitura de tela ou não há conteúdo para ler.');
        }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'claro') {
        body.classList.remove('modo-escuro');
        body.classList.add('modo-claro');
    } else {
        body.classList.add('modo-escuro');
        body.classList.remove('modo-claro');
    }
});