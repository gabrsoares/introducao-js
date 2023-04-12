//box 1
let box1 = document.querySelector('.box-1')

window.onload = box1.innerHTML = "Hello world"

//box 2
let box2 = document.querySelector('.box-2')

function textoClick() {
    box2.innerHTML = "Hello World"
}

//box 3
let box3 = document.querySelector('.box-3')
let inputText = document.getElementById('input-box-3')

function textoInput() {
    box3.innerHTML = inputText.value
}

//box 4
let box4 = document.querySelector('.box-4')

box4.addEventListener("mouseenter", () => {
    box4.innerHTML = "Hello World"
})

box4.addEventListener("mouseleave", () => {
    box4.innerHTML = ""
})

//box 5
let box5 = document.querySelector('.box-5')
let ativo = false

box5.addEventListener("click", () => {
    if (ativo == false) {
        box5.innerHTML = "Hello World"
        ativo = true
    } else {
        box5.innerHTML = ""
        ativo = false
    }
})

//box 6
let item6 = document.querySelector('.item-6')
let opacButton = document.getElementById('botao-opac')

item6.innerHTML = "Hello World"
item6.style.opacity = 0

opacButton.addEventListener("click", () => {
    item6.style.opacity -= '-0.1'
})

//box 7
function alerta() {
    alert("Hello World")
}

//box 8
let helloWorld = ["H","e","l","l","o"," ","w","o","r","l","d"]
let box8 = document.querySelector('.box-8')

box8.innerHTML = (helloWorld.reverse().join(''))

box8.addEventListener("mouseenter", () => {
    box8.innerHTML = helloWorld.reverse().join('')
})