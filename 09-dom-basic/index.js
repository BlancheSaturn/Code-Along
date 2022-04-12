console.log('hello world')

const onDOMLoaded = (_event) => {
    console.log('DOM loaded')
    const button = document.getElementById('myButton')
    const input = document.getElementById('myInput')
    const title = document.getElementById('title')

    button.addEventListener('click', () => {
        button.innerHTML = 'Clicked :)'
        input.value = 'the user was here'
        title.innerHTML = 'Javascript did This'
        // alert('I was clicked')
    })
    
    // at input focus event log 'this input was focused'
    // input.addEventListener('focus', (e) => {
    //     console.log('this element was focused')
    //     input.value = 'the user was here'
    // })

    // title.addEventListener('mouseover', () => {alert('the user hovered')})
}

document.addEventListener(
    'DOMContentLoaded',
    (e) => onDOMLoaded(e)
)

console.log('hello world from the end of the file')

// handleinputchange functions to validate the input 