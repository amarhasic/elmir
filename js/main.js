document.addEventListener('DOMContentLoaded', () => {
    const enButton = document.getElementById('en-btn');
    const deButton = document.getElementById('de-btn');
    const contentEn = document.querySelectorAll('.content-en');
    const contentDe = document.querySelectorAll('.content-de');

    enButton.addEventListener('click', (e) => {
        e.preventDefault();
        contentEn.forEach(element => element.style.display = 'block');
        contentDe.forEach(element => element.style.display = 'none');
    });

    deButton.addEventListener('click', (e) => {
        e.preventDefault();
        contentEn.forEach(element => element.style.display = 'none');
        contentDe.forEach(element => element.style.display = 'block');
    });
});