function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    // se estiver em light mode, adicionar img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se estiber em dark mode, adicionar img dark
    img.setAttribute("src", "./assets/avatar-black.png")
  }

  //substituir alt da img
  if (html.classList.contains('light')) {
    img.setAttribute('alt','foto de perfil, imagem de Krampus, light mode')
  } else {
    img.setAttribute('alt','Foto de perfil, imagem de Krampus, dark mode')
  }  
}
