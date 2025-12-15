// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('simulate-click')
  button.addEventListener('click', () => {
    simulateClick('simulate-click', 'Button Clicked')
  })

  const form = document.getElementById('user-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
  })
})

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
function addElementToDOM(containerId, text) {
    const element = document.getElementById(containerId)
    element.textContent = text
}

function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId)
    element.remove()
}

function simulateClick (containerId, text) {
    const element = document.getElementById(containerId)
    element.textContent = text
}

function handleFormSubmit (userForm, elementId) {
    const input = document.getElementById('user-input')
    const inputValue = input.value
    const element = document.getElementById(elementId)
    const errorMessage = document.getElementById('error-message')

    if (inputValue === "") {
        errorMessage.textContent = 'Input cannot be empty'
        errorMessage.classList.remove('hidden')
    }
    else {
        element.textContent = inputValue
        errorMessage.classList.add('hidden')
    }
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

module.exports = {addElementToDOM, removeElementFromDOM, simulateClick, handleFormSubmit}