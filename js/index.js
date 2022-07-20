
let secaoProdutos = document.querySelector(".products-content")
let ulLista = document.querySelector(".listaProdutos")
let secaoCarrinho = document.querySelector(".carrinho ul")


secaoProdutos.classList.add("products-content")
ulLista.classList.add("listaProdutos")


function listarProdutos(produtos, secao) {

  secao.innerHTML = ""

  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i]

    let criarCard = cardProduto(produto)


    secao.appendChild(criarCard)
  }

}
listarProdutos(data, ulLista)




function cardProduto(produto) {
  let nome = produto.nome
  let img = produto.img
  let categoria = produto.categoria
  let descricao = produto.description
  let valor = produto.valor
  let id = produto.id

  let tagLi = document.createElement("li")
  let tagDiv = document.createElement("div")
  let tagImg = document.createElement("img")
  let tagDepartamento = document.createElement("h4")
  let tagNome = document.createElement("h2")
  let tagDescricao = document.createElement("p")
  let tagPreco = document.createElement("h3")
  let tagX = document.createElement("button")
  let tagBtn = document.createElement("button")

  if (id != undefined) {
    tagBtn.id = id
    tagX.id = id
  }

  tagLi.classList.add("card")
  tagDiv.classList.add("backImg")
  tagDepartamento.classList.add("departamento")
  tagDescricao.classList.add("descricao")
  tagNome.classList.add("tagNome")
  tagDepartamento.classList.add("tagDepartamento")
  tagPreco.classList.add("tagPreco")
  tagBtn.classList.add("tagBtn")
  tagX.classList.add("tagRemocao")



  tagImg.src = img
  tagImg.alt = nome
  tagDepartamento.innerHTML = categoria
  tagNome.innerHTML = nome
  tagDescricao.innerHTML = descricao
  tagPreco.innerHTML = `R$${valor}`
  tagX.innerHTML = "Remover Produto"
  tagBtn.innerHTML = "Adicionar ao Carrinho"

  tagLi.appendChild(tagDiv)
  tagDiv.appendChild(tagImg)
  tagLi.append(tagDepartamento, tagNome, tagDescricao, tagPreco, tagX, tagBtn)


  return tagLi
}


let inputBusca = document.querySelector(".inputBusca")
let inputBtn = document.querySelector(".inputBtn")

inputBusca.addEventListener("keyup", function () {

  let valorPesquisa = inputBusca.value
  let campoBusca = busca(valorPesquisa)
  listarProdutos(campoBusca, secaoProdutos)
})


function busca(valorPesquisa) {
  let resultBusca = []



  for (let i = 0; i < data.length; i++) {
    let pesquisa = valorPesquisa.toLowerCase()
    let nomeProduto = data[i].nome.toLowerCase()
    let departamento = data[i].categoria.toLowerCase()

    if (nomeProduto.includes(pesquisa) || departamento.includes(pesquisa)) {
      resultBusca.push(data[i])

    }

  }
  if (resultBusca.length == 0 || resultBusca == "") {
    resultBusca = data
  }
  return resultBusca
}



let btnDark = document.querySelector(".dark")
let body = document.body
btnDark.addEventListener("click", function () {

  const classResult = body.classList.toggle("button-black")
  if (classResult) {
    btnDark.textContent = "LIGHT MODE"
  } else {
    btnDark.textContent = "DARK MODE"
  }

})










secaoProdutos.addEventListener("click", adicionarProduto)

let carrinhoItens = []

let carrinhoVazio = document.createElement("h1")
carrinhoVazio.classList.add("carrinhoVazio")
carrinhoVazio.innerHTML = "Carrinho vazio :( <br> Adicione itens."

if (carrinhoItens.length == 0) {
  secaoCarrinho.appendChild(carrinhoVazio)
}

let carrinho_info = document.querySelector(".carrinho_info")
let qtdProdutos = document.querySelector(".qtdProdutos")
let precoTotal = document.querySelector(".precoTotal")


let length = carrinhoItens.length
let preco = somar(carrinhoItens)

qtdProdutos.innerHTML = `<strong>QTD Produtos:</strong> ${length}`
precoTotal.innerHTML = `<strong>Preço Total:</strong> R$${preco}`



function listarCarrinho(produtos) {


  secaoCarrinho.innerHTML = ""

  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i]

    let carrinhoVitrine = criarCardCarrinho(produto, i)
    secaoCarrinho.appendChild(carrinhoVitrine)
  }
}

function criarCardCarrinho(produto, index) {
  let nome = produto.nome
  let img = produto.img
  let valor = produto.valor
  let id = produto.id


  let tagLi = document.createElement("li")
  let tagNome = document.createElement("h4")
  let tagRemocao = document.createElement("button")
  //pode criar o event aqui
  let tagImg = document.createElement("img")
  let tagValor = document.createElement("h3")


  tagLi.classList.add("cardCarrinho")
  tagNome.classList.add("tituloItem")
  tagValor.classList.add("tagPreco")
  tagRemocao.classList.add("tagRemocao")

  tagRemocao.index = index

  if (id != undefined) {
    tagRemocao.id = id
  }


  tagNome.innerHTML = nome
  tagImg.src = img
  tagImg.alt = nome
  tagRemocao.innerHTML = "Remover Produto"
  tagValor.innerHTML = `R$${valor}`

  tagLi.append(tagImg, tagNome, tagRemocao, tagValor)

  return tagLi

}

function adicionarProduto(event) {
  let btnComprar = event.target

  if (btnComprar.tagName == "BUTTON") {
    let idProduto = btnComprar.id

    let produtos = data.find(function (produtos) {
      if (produtos.id == idProduto) {
        return produtos
      }
    })
    adicionarCarrinho(produtos)

  }
}

function adicionarCarrinho(produtos) {

  if (produtos !== undefined) {
    carrinhoItens.push(produtos)
    listarCarrinho(carrinhoItens)
    carrinhoInfo(carrinhoItens)
  }

}

function removerItem(event) {



  let btnRemover = event.target

  if (btnRemover.tagName == "BUTTON") {

    let index = btnRemover.index

    secaoCarrinho.innerHTML = ""

    carrinhoItens.splice(index, 1)
    listarCarrinho(carrinhoItens)
    carrinhoInfo(carrinhoItens)
  }

}
secaoCarrinho.addEventListener("click", removerItem)

function carrinhoInfo(arr) {
  let carrinho_info = document.querySelector(".carrinho_info")
  let qtdProdutos = document.querySelector(".qtdProdutos")
  let precoTotal = document.querySelector(".precoTotal")


  let length = arr.length
  let preco = somar(carrinhoItens)

  qtdProdutos.innerHTML = `<strong>QTD Produtos:</strong> ${length}`
  precoTotal.innerHTML = `<strong>Preço Total:</strong> R$${preco}`

  let carrinhoVazio = document.createElement("h1")
  carrinhoVazio.classList.add("carrinhoVazio")

  carrinhoVazio.innerHTML = "Carrinho vazio :( <br> Adicione itens."

  if (carrinhoItens.length == 0) {
    secaoCarrinho.appendChild(carrinhoVazio)
  }


}



function somar(arr) {
  let valorTotal = 0
  for (let i = 0; i < arr.length; i++) {
    valorTotal += arr[i].valor
  }


  return valorTotal
}




