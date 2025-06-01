document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const number = document.getElementById('mobile').value.trim();
  
  if (number.length >= 10) {
    // Redirect to main page after login
    window.location.href = "https://chenchukoushik.github.io/chenchukoushik";
  } else {
    alert("Please enter a valid mobile number");
  }
});
