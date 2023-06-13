console.log(document.body.children[0].innerText)

const bodyChildren = document.body.children

bodyChildren[0].innerText = "Hello World"

const route = document.location.href

bodyChildren[1].children[0].innerText = route


// Otro

// Ejemplo modificando la propiedad style de un elemento
// ütil para elementos específicos
document.body.style.backgroundColor = "tomato"

// Ejemplo modificando la hoja de estilos
// útil para modificar estilos de varios elementos (como clases o elementos)
document.styleSheets[0].cssRules[0].style.backgroundColor="green"