var avatar = document.querySelector('.avatar')
avatar.addEventListener('click', ()=>{
    if(document.body.getAttribute('data-bs-theme') === 'dark'){
        document.body.setAttribute('data-bs-theme', 'light')
    }else{
        document.body.setAttribute('data-bs-theme', 'dark')
    }
})