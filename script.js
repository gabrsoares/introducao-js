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