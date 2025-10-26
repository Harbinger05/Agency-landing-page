const links = document.querySelector('.nav-links')
const menuIcon = document.querySelector('.menu-icon')


menuIcon.addEventListener("click", () => {
    links.classList.toggle('show')
})
