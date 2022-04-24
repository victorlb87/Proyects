// fuentehttps://github.com/eduardofierropro/Tabs-en-HTML-CSS-y-JS

const tab        = document.querySelectorAll('.tab')
const fun    = document.querySelectorAll('.fun')

// CLICK en li
    // TODOS .li quitar la clase activo
    // TODOS .bloque quitar la clase activo
    // .li con la posicion se añadimos la clase activo
    // .bloque con la posicion se añadimos la clase activo

// Recorriendo todos los LI
tab.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADALI
    tab[i].addEventListener('click',()=>{

        // Recorrer TODOS los .li
        tab.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            tab[i].classList.remove('activo')
            // Quitando la clase activo de cada bloque
            fun[i].classList.remove('activo')
        })

        // En el li que hemos click le añadimos la clase activo
        tab[i].classList.add('activo')
        // En el bloque con la misma posición le añadimos la clase activo
        fun[i].classList.add('activo')

    })
})