// SURVEY HUB REGISTER.JS

const registerForm = document.getElementById("registerForm");


if(registerForm){

    registerForm.addEventListener("submit", function(e){

        e.preventDefault();


        const username = document.getElementById("username").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;


        // Check passwords
        if(password !== confirmPassword){

            alert("Passwords do not match ❌");
            return;

        }


        // Create account object
        const account = {

            username: username,
            phone: phone,
            email: email,
            password: password,
            points: 0

        };


        // Save account
        localStorage.setItem(
            "surveyAccount",
            JSON.stringify(account)
        );


        // Save login session
        localStorage.setItem(
            "surveyUser",
            username
        );


        alert(
            "Account created successfully 🎉"
        );


        window.location.href =
        "dashboard.html";


    });

}
