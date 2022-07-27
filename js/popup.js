let btnOpen = document.getElementById("discounts-open");
let modal = document.getElementById("modal");
let btnClosed = document.getElementById("modal__close");
let body = document.getElementsByTagName('body')

    btnOpen.addEventListener('click', function(e){
        e.preventDefault();
       modal.classList.add("active");
    });

    btnClosed.addEventListener('click', ()=>{
        modal.classList.remove("active");
    });



