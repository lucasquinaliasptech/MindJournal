function toggleTheme(button) {
    const html = document.querySelector('html');
    const logo = document.querySelector('#header-logo');
    const intro = document.querySelector('#intro-image');
    const sol = document.querySelector('#sun');
    const lua = document.querySelector('#moon');
    const esquerda = document.querySelector('#mao-esquerda');
    const direita = document.querySelector('#mao-direita');
    let corTextoGraficos = "";

    if (button == "dark") {
        html.setAttribute('data-theme', 'dark');
        sessionStorage.setItem('theme', 'dark');

        logo.src = './assets/imgs/dark-logo.png';

        corTextoGraficos = "#FFFFFF";

        if (esquerda) {
            esquerda.src = './assets/imgs/left-art-dark.png';
            direita.src = './assets/imgs/right-art-dark.png';
        }

        sol.classList.remove('active');
        lua.classList.add('active');

        sol.classList.add('inactive');
        lua.classList.remove('inactive');

        if (intro) {
            intro.src = './assets/imgs/dark-intro-image.png'
        }
    } else {
        html.setAttribute('data-theme', 'light');
        sessionStorage.setItem('theme', 'light');

        logo.src = './assets/imgs/light-logo.png';

        corTextoGraficos = "#000000";

        if (esquerda) {
            esquerda.src = './assets/imgs/left-art-light.png';
            direita.src = './assets/imgs/right-art-light.png';
        }

        sol.classList.add('active');
        lua.classList.remove('active');

        sol.classList.remove('inactive');
        lua.classList.add('inactive');

        if (intro) {
            intro.src = './assets/imgs/light-intro-image.png'
        }
    }

    if (typeof window !== "undefined" && window.graficos && Array.isArray(window.graficos)) {

        const pegarCor = (variavel) => getComputedStyle(document.documentElement).getPropertyValue(variavel);

        window.graficos.forEach(grafico => {
            grafico.options.color = corTextoGraficos;

            const idCanvas = grafico.canvas.id;

            if (idCanvas == "grafico-posts-por-dia") {
                grafico.data.datasets[0].borderColor = pegarCor('--accent');
                grafico.data.datasets[0].backgroundColor = pegarCor('--muted');
                if (grafico.options.scales) {
                    grafico.options.scales.x.grid.color = pegarCor('--border');
                    grafico.options.scales.y.grid.color = pegarCor('--border');
                }
            } else if (idCanvas == "grafico-visibilidade-posts") {
                grafico.data.datasets[0].borderColor = [pegarCor('--accent-purple'), pegarCor('--accent-pink')];
                grafico.data.datasets[0].backgroundColor = [pegarCor('--muted-purple'), pegarCor('--muted-pink')];
            } else if (idCanvas == "grafico-status-posts") {
                grafico.data.datasets[0].borderColor = [pegarCor('--accent-blue'), pegarCor('--accent-green')];
                grafico.data.datasets[0].backgroundColor = [pegarCor('--muted-blue'), pegarCor('--muted-green')];
            }

            if (grafico.options.scales) {
                if (grafico.options.scales.x && grafico.options.scales.x.ticks) grafico.options.scales.x.ticks.color = corTextoGraficos;
                if (grafico.options.scales.y && grafico.options.scales.y.ticks) grafico.options.scales.y.ticks.color = corTextoGraficos;
            }

            grafico.update();
        });
    }
}