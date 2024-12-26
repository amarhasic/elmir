document.addEventListener('DOMContentLoaded', () => {
    const enButton = document.getElementById('en-btn');
    const deButton = document.getElementById('de-btn');
    const contentEn = document.querySelector('.content-en');
    const contentDe = document.querySelector('.content-de');

    enButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent link behavior
        contentEn.style.display = 'block';
        contentDe.style.display = 'none';
    });

    deButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent link behavior
        contentEn.style.display = 'none';
        contentDe.style.display = 'block';
    });
});
