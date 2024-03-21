//Show Menu

const showmenu =(toggleId,navId) =>  {
    const toggle =document.getElementById(toggleId),
           nav =document.getElementById(navId)
    if(toggle && nav){
        toggle. addEventListener('click',() =>{
            nav.classList.toggle('show')
        });
    }
}

showmenu('nav-toggle','nav-menu')

// ACTIVE & REMOVE ACTIVE
const navlink=document.querySelectorAll('.nav-link')
navlink.forEach(n => n.classList.remove('active'))

function linkaction(){
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navmenu=document.getElementById('nav-menu')
    navmenu.classList.remove('show')
}

navlink.forEach(n =>n.addEventListener('click', linkaction))