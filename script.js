document.getElementById("studentForm").addEventListener("submit", function(event) {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let course = document.getElementById("course").value;
    let address = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    error.textContent = "";

    if (name === "" || email === "" || phone === "" ||
        course === "" || address === "") {

        event.preventDefault();
        error.textContent = "Please fill in all fields.";
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        event.preventDefault();
        error.textContent = "Please enter a valid email address.";
        return;
    }

    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        event.preventDefault();
        error.textContent = "Phone number must contain 10 digits.";
        return;
    }

});
