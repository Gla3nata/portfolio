const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescr = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const tabLeftImage = document.querySelectorAll('.design-block__img')
const tabTitle = document.querySelectorAll('.design__title')
const title = document.querySelector('title')

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden') 
        } else {
            elem.classList.add('hidden')
        }
    })  
}

const changeTitle = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            title.innerHTML = elem.innerHTML
        } 
    })  
}


tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click',(event) => {
        const dataValue = tabButton.dataset.tabsHandler

        changeContent(tabTitle, dataValue)
        changeContent(tabImages, dataValue)
        changeContent(tabDescr, dataValue)
        changeContent(tabLeftImage, dataValue)
      
        changeTitle(tabTitle, dataValue)
        
        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active')
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
    })
})