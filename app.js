// alert('working!!')

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.navbar-menu')
const  openModal= document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-button')
const modal = document.querySelector('.modal-container')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  
})

openModal.addEventListener('click', () =>{
    modal.showModal()
} )

closeModal.addEventListener('click',  () => {
    modal.close()
} )
