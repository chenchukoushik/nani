<script>
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    // Optionally validate the mobile number here before redirecting
    const phone = document.getElementById("phone").value.trim();
    if(phone.length >= 10){
      // Redirect to main site after login
      window.location.href = "https://chenchukoushik.github.io/chenchukoushik";
    } else {
      alert("Please enter a valid mobile number");
    }
  });
</script>
