document.getElementById('carbonForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get user inputs
    const travel = parseFloat(document.getElementById('travel').value) || 0;
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const waste = parseFloat(document.getElementById('waste').value) || 0;
  
    // Calculate carbon footprint (example formula)
    const carbonFootprint = (travel * 0.2) + (electricity * 0.5) + (waste * 0.1);
  
    // Display results
    document.getElementById('carbonValue').textContent = carbonFootprint.toFixed(2);
    document.getElementById('results').classList.remove('hidden');
  
    // Suggest offset strategies
    const trees = Math.ceil(carbonFootprint / 10);
    document.getElementById('trees').textContent = trees;
  });

  document.getElementById('carbonForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get user inputs
    const travel = parseFloat(document.getElementById('travel').value) || 0;
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const waste = parseFloat(document.getElementById('waste').value) || 0;
  
    // Calculate carbon footprint (example formula)
    const carbonFootprint = (travel * 0.2) + (electricity * 0.5) + (waste * 0.1);
  
    // Display results
    document.getElementById('carbonValue').textContent = carbonFootprint.toFixed(2);
    document.getElementById('results').classList.remove('hidden');
  
    // Suggest offset strategies
    const trees = Math.ceil(carbonFootprint / 10);
    document.getElementById('trees').textContent = trees;
  
    // Update Impact Dashboard
    const progress = document.getElementById('progress');
    const offsetValue = document.getElementById('offsetValue');
    let offset = 0;
  
    const interval = setInterval(() => {
      offset += 1;
      progress.style.width = `${offset}%`;
      offsetValue.textContent = offset;
  
      if (offset >= carbonFootprint) {
        clearInterval(interval);
      }
    }, 50);
  });

  // Function to save user input to local storage
function saveUserInput(data) {
  // Convert the data to a JSON string
  const dataString = JSON.stringify(data);
  // Save it to local storage
  localStorage.setItem('userData', dataString);
  alert('Data saved successfully!');
}

// Example: Save data when the form is submitted
document.getElementById('carbonForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get user input
  const travel = parseFloat(document.getElementById('travel').value);
  const electricity = parseFloat(document.getElementById('electricity').value);
  const waste = parseFloat(document.getElementById('waste').value);
  const carbonFootprint = travel + electricity + waste; // Example calculation

  // Create an object to store the data
  const userData = {
    travel,
    electricity,
    waste,
    carbonFootprint,
  };

  // Save the data to local storage
  saveUserInput(userData);
});