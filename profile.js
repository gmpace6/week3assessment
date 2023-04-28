console.log('Hello World')

let form2 = document.querySelector('color')
let form3 = document.querySelector('place')
let form4 = document.querySelector('ritual')


form2.addEventListener('hover', (event) => {
    event.preventDefault()
    alert('My Favorite Color is RED')
})

form3.addEventListener('click', (event) => {
    event.preventDefault()
    alert('My Favorite Place is Mexico')
})

form4.addEventListener('click', (event) => {
    event.preventDefault()
    alert('My Favorite Ritual is Dinner')
})

