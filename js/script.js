const nav = document.getElementById("header-nav");

const showMenu = () => {
    nav.classList.contains('show')
    ? nav.classList.remove('show')
    : nav.classList.add('show')
}