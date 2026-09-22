function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  // 1. Seleciona a imagem
  const imagem = document.querySelector("./assets/avatar.png")

  // 2. Define o atributo 'alt' e o seu valor
  img.setAttribute(
    "alt",
    "foto de myki brito sorrindo , usando óculos e camisa preta, barba e fundo amarelo."
  )

  if (html.classList.contains("light")) {
    const img = document.querySelector("./assets/avatar-light.png")

    img.setAttribute(
      "alt",
      "foto de myki brito de óculos preto e sorrindo e com casaco cinza. "
    )
  }
}
