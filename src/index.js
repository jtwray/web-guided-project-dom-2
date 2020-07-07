console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// BUTTONS
const launchButton = document.querySelector('#launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

// MESSAGES
const successMessage = document.querySelector('.report.success')
const failureMessage = document.querySelector('.report.failure')

// MODAL
const modal = document.querySelector('.modal')


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//      - HTML
//      - The DOM's element.onclick
launchButton.onclick = function () {
  console.log('pretty old school')
}
//      - element.addEventListener()
launchButton.addEventListener(
  'click', // arg 1: a type of event (this is a string)
  function () { // arg 2: callback (takes an event object)
    console.log('the modern way')
  }
)

// make another click handler for launch button
// which instead of console.log, changes the text of the
// button to be "you clicked"
launchButton.addEventListener('click', () => {
  launchButton.textContent = 'you clicked'
  // ABSOLUTE POWER TO DO WHATEVER TO WHATEVER PIECE OF THE DOM
})

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
launchButton.addEventListener('click', () => {
  modal.classList.remove('off')
})

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
confirmButton.addEventListener('click', (e) => {
  modal.classList.add('off')
  successMessage.classList.remove('off')
})

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
cancelButton.addEventListener('click', () => {
  // if it doesn't work, perhaps:
  // it's firing but not doing what it's supposed to
  // it's not even firing
  modal.classList.add('off')
  failureMessage.classList.remove('off')
})

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.


// 👉 TASK 8- Select a link and prevent its default behavior


// 👉 TASK 9- Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.


// 👉 TASK 10- [STRETCH] Create helper functions
function openModal() {

}

function closeModal() {

}

function killReports() {

}
