import { Categoria } from "./clases.js"
var tabla = document.getElementById('tabla')
const apiUrl = 'https://api.chucknorris.io/jokes/categories'
var randomBtn=document.getElementById('random')
obtenerCategorias()



randomBtn.addEventListener('click',function(){
    let c=new Categoria('aleatorio')
    establecerCategoria(c)
    window.location.href='frase.html'
})


async function obtenerCategorias() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('No se pudo obtener las categorias');
        }

        const data = await response.json();
        pintarCategorias(data)

        return true

    } catch (error) {
        return false
    }
}



function pintarCategorias(categorias) {
    var tabla = document.getElementById('tabla');
        categorias.forEach(function (categoria) {
            let fila = document.createElement('tr');
            let enlaceCelda = document.createElement('td');
            let enlace = document.createElement('a');
            enlace.href = 'frase.html';
            enlace.textContent = categoria;

            enlace.addEventListener('click', function(event) {
                event.preventDefault();
                var t = enlace.textContent;
                let c=new Categoria(t)
                establecerCategoria(c)
                window.location.href='frase.html'
              });

            enlaceCelda.appendChild(enlace);
            fila.appendChild(enlaceCelda);
            tabla.appendChild(fila);
        }
        )
        
    }



export function establecerCategoria(categoria){
    localStorage.setItem('categoria',JSON.stringify(categoria))

}