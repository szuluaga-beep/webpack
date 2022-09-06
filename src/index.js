import  webpacklogo  from "../src/assets/img/webpack-logo.png";
import '../style.css'
import './css/styles.css'

export const crearTitulo = (titulo) => {
     const texto = document.createElement('h1')
     texto.innerHTML = titulo

     document.body.appendChild(texto)

     const imagen = document.createElement("img")
     imagen.src=webpacklogo
     document.body.appendChild(imagen)
}

crearTitulo('Mi página web')