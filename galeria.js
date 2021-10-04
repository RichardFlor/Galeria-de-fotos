"use strict"

const imagens = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg",
    "./img/7.jpg",
    "./img/8.jpg",
    "./img/9.jpg",
    "./img/10.jpg"
]

const pegarId = (url) => {
    const posBarra = url.lastIndexOf("/") + 1
    const posPonto = url.lastIndexOf(".")
    return url.substring(posBarra, posPonto)
}

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
                //Jeito certo
                
    const novoLink = document.createElement("a")
    novoLink.href = `#${pegarId(urlImagem)}`
    novoLink.classList.add("galeria-items")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)

                 //Jeito errado
    // container.innerHTML += `
    // <a href="#1" class="galeria-items">
    // <img src="${urlImagem}" alt="">
    // </a>
    //` 
}

const carregarGaleria = (imgs) => imgs.forEach(criarItem)

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("slide")
    novaDiv.id = pegarId(urlImagem)

    const indiceAnterior = indice <=0 ? arr.length - 1 : indice - 1 
    const idAnterior = pegarId(arr[indiceAnterior])

    const indiceProximo = indice >= arr.length - 1 ? 0 : indice + 1
    const idProximo = pegarId(arr[indiceProximo])

    novaDiv.innerHTML = `
    <div class="imagem-container">
    <a href="#" class="fechar"> &#10006;</a>
    <a href="#${idAnterior}" class="navegacao anterior">&#171;</a>
    <img src="${urlImagem}" alt="">
    <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
    </div>
    `
    container.appendChild(novaDiv)
}

const carregarSlide = (imgs) => imgs.forEach(criarSlide)


carregarGaleria(imagens)


carregarSlide(imagens)

{/* <div class="slide" id="9">
<div class="imagem-container">
    <a href="#" class="fechar">
        &#10006;
    </a>
    <a href="#8" class="navegacao anterior">
        &#171;
    </a>
    <img src="img/9.jpg" alt="">
    <a href="#10" class="navegacao proximo">&#187;</a>
 </div>
</div> */}