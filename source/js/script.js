//---- Cabeçalho -----\\
let header = document.createElement("header")
let logo = document.createElement("h1")
let cabecalhoPesquisa = document.createElement("input")
let contatos = document.createElement("a")

header.classList.add("cabecalho")
logo.classList.add("logoCabecalho")
cabecalhoPesquisa.classList.add("cabecalhoPesquisa")
contatos.classList.add("cabecalhoContatos")

logo.innerText = "Logo_Página"

cabecalhoPesquisa.placeholder = "Pesquisar Modelo"

contatos.innerText = "Contatos"
contatos.href = "#"

header.append(logo, cabecalhoPesquisa, contatos)
document.body.appendChild(header)
//---- Cabeçalho Finalizado ----\\

//---- Profile Card ----\\
let section = document.createElement("section")
let figure = document.createElement("figure")
let profileModel = document.createElement("img")
let divisoria = document.createElement("div")
let description = document.createElement("p")


section.classList.add("sessaoCard")
figure.classList.add("imgCaixa")
profileModel.classList.add("imgCard")
divisoria.classList.add("caixaDescription")
description.classList.add("description")

profileModel.src = "./img/Pic Model.jpeg"
profileModel.alt = "Model_Photo"

description.innerText = "Modelo selecionado se chama Lucas Mires, estudante da Kenzie Academy Brasil. Este projeto tem como incentivo receber novas aplicações e técnologias com o avançar dos conhecimentos do Estudante. Foram utilizados CSS (Estilisação completa da página) e JavaScript (DOM). Espero que essa página possa ajudar novos desenvolvedores com problemas no CSS e dar examplos do que fazer ou commo aplicar algum elemento do CSS"

// "O modelo selecionado é Lucas Mires, estudante da Kenzie Academy Brasil. Este projeto de perfil foi inspirado nas aulas de CSS do Canvas. Para qualquer um que tenha alguma dificuldade com CSS possa ultilizar esta página como um exemplo/possibilidade de Cards no CSS."

section.append(figure, divisoria)
divisoria.append(description)
figure.appendChild(profileModel)

document.body.appendChild(section)

//---- Profile Card Finalizado----\\