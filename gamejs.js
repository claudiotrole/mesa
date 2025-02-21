


const meuBuscador = new IntersectionObserver((ver) => {
    ver.forEach((veja) => {
        if (veja.isIntersecting){
            veja.target.classList.add('show')
        } else {
            veja.target.classList.remove('show')
        }
    })
    
})

const elementos = document.querySelectorAll('.hidden');

elementos.forEach((element) => 
    meuBuscador.observe(element)

)

