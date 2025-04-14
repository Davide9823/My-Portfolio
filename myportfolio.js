let hamburgerButton = document.querySelector('#hamburger')
let navbar = document.querySelector('#navbar')
hamburgerButton.addEventListener('click', function() {
    navbar.classList.toggle('show')
})