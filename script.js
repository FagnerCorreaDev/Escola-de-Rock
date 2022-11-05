
const imagens = document.querySelectorAll('.imagem')
// looping pelas imagens
imagens.forEach(imagem => {
  imagem.addEventListener('click', () => {
    removerSlide()
    imagem.classList.add('slide')
  })
})

function removerSlide() {
  imagens.forEach(imagem => {
    imagem.classList.remove('slide')
  })
}
  