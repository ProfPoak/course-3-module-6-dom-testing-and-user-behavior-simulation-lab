 
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('simulate-click')
  button.addEventListener('click', () => {
    simulateClick('dynamic-content', 'Button Clicked')
  })

  const form = document.getElementById('user-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    handleFormSubmit('user-form','dynamic-content')
  })
})

function addElementToDOM(containerId, text) {
    const element = document.getElementById(containerId)
    element.textContent = text
}

function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId)
    element.remove()
}

function simulateClick (containerId, text) {
    addElementToDOM(containerId, text)
}

function handleFormSubmit (userForm, elementId) {
    const input = document.getElementById('user-input')
    const inputValue = input.value
    const element = document.getElementById(elementId)
    const errorMessage = document.getElementById('error-message')

    if (inputValue.trim() === "") {
        errorMessage.textContent = 'Input cannot be empty'
        errorMessage.classList.remove('hidden')
    }
    else {
        element.textContent = inputValue
        errorMessage.classList.add('hidden')
    }
}


module.exports = {addElementToDOM, removeElementFromDOM, simulateClick, handleFormSubmit}