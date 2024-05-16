document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Verify the credentials (Example: hardcoded credentials for demonstration)
    if (username === 'admin' && password === 'password') {
      // Show the content container
      document.getElementById('content-container').classList.remove('hidden');
      // Hide the login container
      document.getElementById('login-container').classList.add('hidden');
    } else {
      alert('Invalid username or password');
    }
  });
  
  document.getElementById('logout-btn').addEventListener('click', function() {
    // Show the login container
    document.getElementById('login-container').classList.remove('hidden');
    // Hide the content container
    document.getElementById('content-container').classList.add('hidden');
  
    // Clear the username and password fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  });