const pages = document.querySelectorAll('.page');
let zIndexCount = pages.length;

// Organiza as páginas inicialmente
pages.forEach((page, index) => {
    page.style.zIndex = zIndexCount - index;
});

pages.forEach((page, index) => {
    page.addEventListener('click', () => {
        if (!page.classList.contains('flipped')) {
            // Vira para frente
            page.classList.add('flipped');
            setTimeout(() => {
                page.style.zIndex = index;
            }, 500);
        } else {
            // Volta a página
            page.classList.remove('flipped');
            setTimeout(() => {
                page.style.zIndex = zIndexCount - index;
            }, 500);
        }
    });
});