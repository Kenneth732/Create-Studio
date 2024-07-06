document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector("#fas-bars")

    const closeIcon = document.querySelector('#closeIcon')

    const navMenu = document.querySelector('nav ul')

    menuIcon.addEventListener('click', () => {
        navMenu.style.right = '0'
    })

    closeIcon.addEventListener('click', () => {
        navMenu.style.right = '-300px'
    })
})





