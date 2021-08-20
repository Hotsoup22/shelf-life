//login 
const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("loginbtn clicked")
 
 

  // TODO: Add a comment describing the functionality of these expressions
  const email = document.querySelector('#emailLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();

  if (email && password) {
    // TODO: Add a comment describing the functionality of this expression
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/addItems');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.loginForm')
  .addEventListener('submit', loginFormHandler);
  // Handle logging out the user
const logout = async () => {
  console.log("logout btn")
  const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
      document.location.replace('/');
  } else {
      alert(response.statusText, " failed to logout");
  }
};

// Listen for the logout click
document.querySelector('#logoutBtn').addEventListener('click', logout);