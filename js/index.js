
let secaoProdutos = document.querySelector(".products-content")
let ulLista = document.querySelector(".listaProdutos")

secaoProdutos.classList.add("products-content")
ulLista.classList.add("listaProdutos")


function listarProdutos (produtos) {

    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i]
        
        let criarCard = cardProduto(produto)

        ulLista.appendChild(criarCard)
    }
    
}
listarProdutos(data)


function cardProduto (produto) {

    let nome = produto.nome
    let img = produto.img
    let categoria = produto.categoria
    let descricao = produto.description
    let valor = produto.valor
    

    let tagLi = document.createElement("li")
    let tagDiv = document.createElement("div")
    let tagImg = document.createElement("img")
    let tagDepartamento = document.createElement("h4")
    let tagNome = document.createElement("h2")
    let tagDescricao = document.createElement("p")
    let tagPreco = document.createElement ("h3")
    let tagBtn = document.createElement("button")

    tagLi.classList.add("card")
    tagDiv.classList.add("backImg")
    tagDepartamento.classList.add("departamento")
    tagDescricao.classList.add("descricao")
    tagNome.classList.add("tagNome")
    tagDepartamento.classList.add("tagDepartamento")
    tagPreco.classList.add("tagPreco")
    tagBtn.classList.add("tagBtn")


    tagImg.src = img
    tagImg.alt = nome
    tagDepartamento.innerHTML = categoria
    tagNome.innerHTML  = nome
    tagDescricao.innerHTML  = descricao
    tagPreco.innerHTML = `R$${valor}`
    tagBtn.innerHTML = "Adicionar ao Carrinho"

    tagLi.appendChild(tagDiv)
    tagDiv.appendChild(tagImg)
    tagLi.append(tagDepartamento, tagNome, tagDescricao, tagPreco, tagBtn)
    

     return tagLi
}

let btnDark = document.querySelector(".dark")
let body = document.body
btnDark.addEventListener("click", function () {

    const classResult = body.classList.toggle("button-black")
    if(classResult){
        btnDark.textContent = "LIGHT MODE"
      }else{
        btnDark.textContent = "DARK MODE"
      }
       
    })

console.log()
