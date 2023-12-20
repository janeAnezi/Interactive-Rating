const nameForm = document.getElementById('Name-form');
const greeting = document.getElementById('greeting');
const clearName = document.getElementById('clear-button');
const nameInput = document.getElementById('name');

document.addEventListener('DOMContentLoaded', function () {
    // Check if the name is already stored in local storage
    // const storedName = localStorage.getItem('userName');
  
    // if (storedName) {
    //   displayGreeting(storedName);
    // } else {
    //   displayGreeting(); // Display a generic greeting
    // }
  
    // Form submission event
    nameForm.addEventListener('submit', function (event) {
      event.preventDefault(); // to prevent the default form submission
  
      const userName = document.getElementById('name').value;
      localStorage.setItem('userName', userName);
      displayGreeting(userName);
    });
  
    // // Clear button click event
    clearName.addEventListener('click', function () {
      localStorage.removeItem('userName');
      //displayGreeting(); // Display a generic greeting after clearing the name
        nameForm.style.display = "block";
        greeting.innerHTML = "";

        // Clear the input field
        nameInput.value = '';
    
    });

   
  
    // Function to display personalized greeting
    function displayGreeting(name) {
      if (name) {
        greeting.innerHTML = `<p>Good Day, ${name}! It is nice to have you here.</p>`;
      } else {
        greeting.innerHTML = `<p>Hello, stranger!</p>`; 

      }

        nameForm.style.display = 'none';
        greeting.style.display = 'block';
        clearName.style.display = 'block';
    }
  });
  