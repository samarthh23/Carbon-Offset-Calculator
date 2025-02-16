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
  
    // Update dashboard
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
  
    // Calculate trees needed (1 tree offsets ~21.77 kg CO₂ per year)
    const trees = Math.ceil(carbonFootprint / 21.77);
    document.getElementById('trees').textContent = trees;
  
    // Send data to the backend
    fetch('/save-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ travel, electricity, waste, carbonFootprint }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data saved:', data);
        updateDashboard();
      })
      .catch(error => console.error('Error:', error));
  });
  
  // Fetch and update the dashboard
  function updateDashboard() {
    fetch('/get-data')
      .then(response => response.json())
      .then(data => {
        const progress = document.getElementById('progress');
        const offsetValue = document.getElementById('offsetValue');
  
        // Update progress bar and offset value
        progress.style.width = `${data.carbonFootprint}%`;
        offsetValue.textContent = data.carbonFootprint.toFixed(2);
      })
      .catch(error => console.error('Error:', error));
  }
