// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get user inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    console.log('Email:', email); // Debugging
    console.log('Password:', password); // Debugging
  
    // Simple validation (for demo purposes)
    if (email && password) {
      console.log('Validation passed. Redirecting...'); // Debugging
      // Store the email in localStorage
      localStorage.setItem('userEmail', email);
  
      // Redirect to the calculator page
      window.location.href = 'calculator.html#calculator'; // Redirects to the calculator section
    } else {
      console.log('Validation failed. Please fill in both fields.'); // Debugging
      alert('Please enter both email and password.');
    }
  });
  
  // Display Welcome Message on Calculator Page
  window.addEventListener('load', function () {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      console.log('User email found:', userEmail); // Debugging
      const welcomeMessage = document.createElement('p');
      welcomeMessage.textContent = `Welcome back, ${userEmail}!`;
      welcomeMessage.style.textAlign = 'center';
      welcomeMessage.style.color = '#4CAF50';
      welcomeMessage.style.marginTop = '20px';
      document.querySelector('.calculator').prepend(welcomeMessage);
    } else {
      console.log('No user email found in localStorage.'); // Debugging
    }
  });