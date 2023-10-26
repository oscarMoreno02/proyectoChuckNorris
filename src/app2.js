import { Frase,Categoria } from "./clases.js"


const frase = document.getElementById('frase')
const apiUrl = 'https://api.chucknorris.io/jokes/random?category='
const boton = document.getElementById('boton')
let datos=JSON.parse(localStorage.getItem('categoria'))
let categoria=new Categoria(datos.nombre)


boton.addEventListener('click', function(){
    obtenerFrase()


})

document.addEventListener('keydown',function(keyBoardEvent){
   if(keyBoardEvent.key=='r'){
    obtenerFrase()
   }
})


export async function obtenerFrase() {
    try {
        const response = await fetch(apiUrl+categoria.nombre);
        if (!response.ok) {
            throw new Error('No se pudo obtener las categorias');
        }

        const data = await response.json();
        let f= new Frase(data.value,data.id)
        frase.textContent=(f.contenido)
        return true

    } catch (error) {
        return false
    }
}
