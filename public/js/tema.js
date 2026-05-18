function toggleTheme(button) {
    const html = document.querySelector('html');
    const logo = document.querySelector('#header-logo');
    const intro = document.querySelector('#intro-image');
    const sol = document.querySelector('#sun');
    const lua = document.querySelector('#moon');

    if (button == "dark") {
        html.setAttribute('data-theme', 'dark');
        sessionStorage.setItem('theme', 'dark');

        logo.src = './assets/imgs/dark-logo.png';

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

        sol.classList.add('active');
        lua.classList.remove('active');

        sol.classList.remove('inactive');
        lua.classList.add('inactive');

        if (intro) {
            intro.src = './assets/imgs/light-intro-image.png'
        }
    }
}