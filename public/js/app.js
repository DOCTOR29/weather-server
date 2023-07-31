



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messagOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messagOne.textContent = 'Form JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()


    const location = search.value 

    messagOne.textContent = 'Loading...'
    messageTwo.textContent= ''
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messagOne.textContent = data.error
                
            } else {
                messagOne.textContent = data.location
                messageTwo.textContent= data.forecast
            }
        })
    })
    console.log(location)
})