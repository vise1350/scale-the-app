// Get references to the form and input fields
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the values of the input fields
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const numberValue = numberInput.value;

  // Create an object to represent the form data
  const formData = {
    name: nameValue,
    email: emailValue,
    number: numberValue
  };

  // Save the form data to local storage with email as key
  localStorage.setItem(emailValue, JSON.stringify(formData));

  // Alert the user that their form data has been saved
  alert('Form data saved to local storage with key: ' + emailValue);

  // Display the form data on the main page
  const savedData = JSON.parse(localStorage.getItem('formData'));
  const displayDiv = document.getElementById('display-data');
  displayDiv.innerHTML = `Name: ${savedData.name}<br>Email: ${savedData.email}<br>Number: ${savedData.number}`;

});

