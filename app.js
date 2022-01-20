const btnInscrp = document.querySelector('.btn-inscription');
const btnConnection = document.querySelector('.btn-connection');
const deco = document.querySelector('.btn-deconnection');

const formInscription = document.querySelector('.form-inscription');
const formConnection = document.querySelector('.form-connection');

btnInscrp.addEventListener('click', () => {

    if(formConnection.classList.contains('apparition')){
        formConnection.classList.remove('apparition');
    }

    formInscription.classList.toggle('apparition');
     
})

btnConnection.addEventListener('click', () => {

    if(formInscription.classList.contains('apparition')){
        formInscription.classList.remove('apparition');
    }

    formConnection.classList.toggle('apparition');
     
})