const btn = document.querySelectorAll('.button')
const bdy = document.querySelector('body')

btn.forEach(function(butn) {
    console.log(butn)
    butn.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'grey') {
            bdy.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            bdy.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            bdy.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            bdy.style.backgroundColor = e.target.id;
        }
    })
})