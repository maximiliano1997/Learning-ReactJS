// let accordion = document.querySelectorAll('.accordion')

// console.log(accordion[0].nextElementSibling)
// let i;
// for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener("click", function () {

//         // closeAllAccordionItems();

//         this.classList.toggle("active")

//         let content = this.nextElementSibling;
//         if (content.style.display === "block") {
//             content.style.display = "none"
//         } else {
//             content.style.display = "block"
//         }

//     })
// }

// function closeAllAccordionItems() {
//     accordion.forEach(function (item) {
//         const content = item.querySelector('.content')
//         content.classList.remove('active')
//     })

// }


const accordions = document.querySelectorAll('.accordion')

accordions.forEach(function (accordion) {
    accordion.addEventListener('click', function () {
        const content = this.nextElementSibling;


        // Cerrar el mismo panel si ya está abierto
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            this.classList.remove('active');
        } else {
            // Cerrar todos los demás contenidos
            closeAllAccordions();

            // Abrir el contenido de este panel
            content.classList.add('show');
            this.classList.add('active');
        }

    })
})

function closeAllAccordions() {
    accordions.forEach(function (accordion) {
        const content = accordion.nextElementSibling;

        if (content.classList.contains('show')) {
            content.classList.remove('show')
            accordion.classList.remove('active')
        }
    })
}


