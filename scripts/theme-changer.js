const changers = document.querySelectorAll('[data-id=theme-changer]');
const html = document.documentElement;

let isDark = false;

for (let i = 0; i < changers.length; i++)  {
    changers[i].addEventListener('change', function() {
        isDark = !isDark;
        setTheme();
    });
}

let setTheme = () => {
    if (isDark) {
        html.setAttribute('data-theme-dark', 'true');
        for (let i = 0; i < changers.length; i++) {
            changers[i].setAttribute('checked', 'true');
        }
    } else {
        html.removeAttribute('data-theme-dark');
        for (let i = 0; i < changers.length; i++) {
            changers[i].removeAttribute('checked');
        }
    }
}





