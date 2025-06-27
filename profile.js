document.addEventListener("DOMContentLoaded", function () {
    let userName = localStorage.getItem("userName") || "User Name";
    let userEmail = localStorage.getItem("userEmail") || "user@example.com";

    // Display stored data
    document.getElementById("user-name").innerText = userName;
    document.getElementById("user-email").innerText = userEmail;
    document.getElementById("profile-letter").innerText = userName.charAt(0).toUpperCase();

    const editBtn = document.querySelector(".edit-btn");
    const editSection = document.getElementById("edit-section");
    const saveBtn = document.querySelector(".save-btn");
    const cancelBtn = document.querySelector(".cancel-btn");

    editBtn.addEventListener("click", function () {
        // Show the edit section and fill in the current details
        editSection.style.display = "block";
        document.getElementById("edit-name").value = userName;
        document.getElementById("edit-email").value = userEmail;

        // Hide the edit button
        editBtn.style.display = "none";
    });

    saveBtn.addEventListener("click", function () {
        let newName = document.getElementById("edit-name").value.trim();
        let newEmail = document.getElementById("edit-email").value.trim();

        if (newName === "" || newEmail === "") {
            alert("Name and Email cannot be empty!");
            return;
        }

        // Update UI
        document.getElementById("user-name").innerText = newName;
        document.getElementById("user-email").innerText = newEmail;
        document.getElementById("profile-letter").innerText = newName.charAt(0).toUpperCase();

        // Save data locally
        localStorage.setItem("userName", newName);
        localStorage.setItem("userEmail", newEmail);

        // Hide edit section and show edit button
        editSection.style.display = "none";
        editBtn.style.display = "inline-block";
    });

    cancelBtn.addEventListener("click", function () {
        // Hide edit section without saving
        editSection.style.display = "none";
        editBtn.style.display = "inline-block";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.querySelector(".logout-btn");
    const logoutPopup = document.getElementById("logout-popup");
    const confirmLogoutBtn = document.getElementById("confirm-logout");
    const cancelLogoutBtn = document.getElementById("cancel-logout");

    logoutBtn.addEventListener("click", function () {
        logoutPopup.style.display = "block"; // Show confirmation window
    });

    cancelLogoutBtn.addEventListener("click", function () {
        logoutPopup.style.display = "none"; // Hide confirmation window
    });

    confirmLogoutBtn.addEventListener("click", function () {
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        window.location.href = "login.html"; // Redirect to login page
    });
});
