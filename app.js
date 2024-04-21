document.getElementById('date').innerHTML = new Date().getFullYear();

const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

navBtn.addEventListener('click', () => {
    console.log(links);
    console.log('clicked');
    links.classList.toggle('show-links');
});
