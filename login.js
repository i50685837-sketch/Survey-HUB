// SURVEY HUB LOGIN.JS

const loginForm = document.getElementById("loginForm");


if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();


        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;


        if(phone === "" || password === ""){

            alert("Please fill all fields ⚠️");
            return;

        }


        // Get saved account
        const account = JSON.parse(
            localStorage.getItem("surveyAccount")
        );


        if(account){

            if(
                account.phone === phone &&
                account.password === password
            ){

                localStorage.setItem(
                    "surveyUser",
                    account.username
                );


                alert(
                    "Welcome back " + account.username + " 🎉"
                );


                window.location.href =
                "dashboard.html";


            }else{

                alert(
                    "Invalid phone number or password ❌"
                );

            }


        }else{

            alert(
                "No account found. Please register first."
            );

            window.location.href =
            "register.html";

        }


    });

}
