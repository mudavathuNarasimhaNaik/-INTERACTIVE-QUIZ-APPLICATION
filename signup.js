document.getElementById("signup").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate input fields
    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    // Send data to backend
    try {
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Signup successful! Redirecting to login...");
            window.location.href = "login.html"; // Redirect to login page
        } else {
            alert(data.message || "Signup failed. Try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
});
