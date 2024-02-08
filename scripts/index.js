const linguagem = document.querySelector('.linguagem')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('#editor__highlight')
const bgManipulada = document.querySelector('.content__editor__bg')
const colorPicker = document.querySelector('#colorPicker')

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="editor__bg__textCode hljs $(linguagem.value)" contenteditable="true" aria-label="Editor de Código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})

colorPicker.addEventListener('change', function() {
    bgManipulada.style.backgroundColor = colorPicker.value;
})