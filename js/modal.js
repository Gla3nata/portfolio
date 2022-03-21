const modalButton = document.querySelector('.more')
const modal = document.querySelector('.modal')
const overlay = modal.querySelector('.overlay')
const modalClose = modal.querySelector('.modal__close')


modalButton.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

 overlay.addEventListener('click', () => {
     modal.classList.add('hidden')
 })

 modalClose.addEventListener('click', () => {
    modal.classList.add('hidden')
})