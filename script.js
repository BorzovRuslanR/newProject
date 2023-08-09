console.log('Hello world!')

let signInBtn = document.getElementById('sign-in-btn')
// let signInBtn = document.querySelector('#sign-in-btn')
let modal = document.querySelector('.modal')
// CSS селекторы

signInBtn.onclick = function(event) {
    event.preventDefault()
    modal.classList.add('show')
    // modal.style.display = 'flex' так делать не надо
}

modal.onclick = function(event) {
    
    if (event.target.classList.contains('modal')) {
        modal.classList.remove('show')
    }
}

let closeModalBtn = document.querySelector('.close-modal-btn')
closeModalBtn.onclick = function(event) {
    modal.classList.remove('show')
}