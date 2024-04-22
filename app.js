document.getElementById('date').innerHTML = new Date().getFullYear();

const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
const link = document.querySelectorAll('.nav-link');

navBtn.addEventListener('click', () => {
    console.log(links);
    console.log('clicked');
    links.classList.toggle('show-links');
});

link.forEach((l) => {
    l.addEventListener('click', () => {
        links.classList.remove('show-links');
    });
});
