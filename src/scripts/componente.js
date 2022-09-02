import '../css/styles.css'

export const crearTitulo = (titulo) => {
     const texto = document.createElement('h1')
     texto.innerHTML = titulo

     document.body.appendChild(texto)
}