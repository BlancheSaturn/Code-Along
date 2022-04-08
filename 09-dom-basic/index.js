console.log('hello')

const onDOMLoaded = (_e) => {
    const button = document.getElementById('myButton') 
    button.innerHTML = 'Hello World'
    button.addEventListener('click', () => alert('I was clicked'))
}

// at input focus event log 'this input was focused'
const input = document.getElementById('myInput')
input.addEventListener('focus', () => console.log('This input was clicked'))

const title = document.getElementById('title')
title.addEventListener('mouseover', () => alert('the user hovered'))


document.addEventListener(
    'DOMContentLoaded', 
    (e) => onDOMLoaded(e)
)