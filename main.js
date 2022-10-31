const home = document.querySelector('#home')
const projetos = document.querySelector('#projetos')
const social = document.querySelector('#social')

// PAGINAS -------------
const homePage = document.querySelector('.homepage')
const projetosPage = document.querySelector('.projetospage')

function focusPage(){
    document.addEventListener('click',(e)=>{
    switch (e.target.id){
        case 'home':
            homePage.style.display = 'block';
            projetosPage.style.display = 'none';
            break
        case 'projetos':
            homePage.style.display = 'none';
            projetosPage.style.display = 'block';
            break
        case 'social':
            homePage.style.display = 'none';
            break
    }
})}
focusPage()