//Navegação

document.querySelectorAll('[text-i]').forEach(link => {
    const content= document.getElementById('content')
    
    link.onclick = function(e) {
        e.preventDefault()
        fetch(link.getAttribute('text-i'))
            .then(resp => resp.text())
            .then(html => content.innerHTML = html)
    }
})

//selected no menu



