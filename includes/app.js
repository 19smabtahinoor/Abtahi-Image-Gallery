const allImage = document.querySelectorAll('.img')
const lightbox= document.querySelector('.lightboximage')
const popUpImage = document.querySelector('.popupimage')
const closeBtn = document.querySelector('.closeBtn')

allImage.forEach( (element) => {
    element.addEventListener('click', (e) => {
        lightbox.classList.add('active')
        popUpImage.setAttribute('src',e.target.src)
    })
})


closeBtn.addEventListener('click',() => {
    lightbox.classList.remove('active')
})


