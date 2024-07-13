let shareBtn = document.querySelector('.share-btn')
let shareBtn2 = document.querySelector('.share-btn2')
let shareBtn3 = document.querySelector('.share-btn3')
let shareDisplayeDesktop = document.querySelector('.share-active-desktop')
let shareDisplayeMobile = document.querySelector('.share-active-mobile')



shareBtn.addEventListener('click', () => {
    if (!shareDisplayeDesktop.classList.contains('hidden')) {
        console.log('has hidden already ')
        shareDisplayeDesktop.classList.add('hidden')
    } else {
        shareDisplayeDesktop.classList.remove('hidden')
    }
})
console.log(shareBtn)

shareBtn2.addEventListener('click', () => {
    if (!shareDisplayeMobile.classList.contains('hidden')) {
        console.log('has hidden already ')
        shareDisplayeMobile.classList.add('hidden')
    } else {
        shareDisplayeMobile.classList.remove('hidden')
    }
})
shareBtn3.addEventListener('click', () => {
    if (shareDisplayeMobile.classList.contains('hidden')) {
        console.log('has hidden already ')
        shareDisplayeMobile.classList.remove('hidden')
    } else {
        shareDisplayeMobile.classList.add('hidden')
    }
})