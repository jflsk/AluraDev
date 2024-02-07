const linguagem = document.querySelector('.linguagem')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('#editor__highlight')

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="editor__bg__textCode hljs $(linguagem.value)" contenteditable="true" aria-label="Editor de Código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})