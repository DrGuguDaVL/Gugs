  const apiUrl = 'http://localhost:3000'; // Change to your backend URL

    document.getElementById('registerForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;

      const res = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.text();
      alert(data);
    });

    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      const res = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (data.token) {
        alert('Login successful!');
        // Optionally store token for authenticated requests
        localStorage.setItem('token', data.token);
      } 
       const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = 'login.html'; // Redirect to login if not authenticated
  }
      
  const apiUrl = 'http://localhost:3000'; // Change to your backend URL

  // Registration logic remains the same...

  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const res = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.token) {
      alert('Login successful!');
      localStorage.setItem('token', data.token);

      // ✅ Redirect here
      window.location.href = 'dashboard.html'; // Replace with your actual page
    } else {
      alert('Login failed');
    }  })});