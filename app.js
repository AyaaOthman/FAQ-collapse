const btnsOpen = document.querySelectorAll('.open')
const btnClose = document.querySelectorAll('.close')

btnsOpen.forEach((btnOpen) =>{
    btnOpen.addEventListener('click', openCard)
    function openCard(){
        btnOpen.parentNode.classList.add('open-card')
        btnOpen.parentElement.childNodes[3].classList.remove('hide')
         btnOpen.parentElement.childNodes[1].childNodes[3].classList.remove('hide')
         btnOpen.parentElement.childNodes[5].classList.remove('hide')
         btnOpen.parentElement.childNodes[7].classList.add('hide')
    }
})

btnClose.forEach((btnClose) =>{
    btnClose.addEventListener('click', closeCard)
    function closeCard(){
        btnClose.parentNode.classList.remove('open-card')
        btnClose.parentElement.childNodes[3].classList.add('hide')
         btnClose.parentElement.childNodes[1].childNodes[3].classList.add('hide')
         btnClose.parentElement.childNodes[5].classList.add('hide')
         btnClose.parentElement.childNodes[7].classList.remove('hide')
    }
})
