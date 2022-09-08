const p = document.querySelectorAll('.cano')

function mover(elem, inicio, fim, passo, callback) {
  const novoInicio = inicio - passo
  if(novoInicio >= fim) {
    elem.style.left = novoInicio + 'px'
    setTimeout(() => mover (elem, inicio, fim, passo, callback), 7)
  } else {
    callback()
  }
}

// p.style.display = 'block'
mover(p, 1500, -400, 5, () => {
  console.log('terminou')
})