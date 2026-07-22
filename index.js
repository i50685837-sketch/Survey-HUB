// SURVEY HUB INDEX.JS

document.addEventListener("DOMContentLoaded", () => {

    // Check user login
    const user = localStorage.getItem("surveyUser");

    const authArea = document.getElementById("authArea");

    if(user && authArea){

        authArea.innerHTML = `
            <span>👤 ${user}</span>
            <button onclick="logout()">Logout</button>
        `;

    }


    // Mobile menu
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if(menuBtn){

        menuBtn.onclick = () => {
            navMenu.classList.toggle("show");
        };

    }


    // Get started button
    const startBtn = document.getElementById("startBtn");

    if(startBtn){

        startBtn.onclick = () => {

            if(localStorage.getItem("surveyUser")){

                window.location.href="dashboard.html";

            }else{

                window.location.href="register.html";

            }

        };

    }


});


// Logout function
function logout(){

    localStorage.removeItem("surveyUser");

    window.location.href="index.html";

}


// Save user demo
function saveUser(name){

    localStorage.setItem(
        "surveyUser",
        name
    );

    window.location.href="dashboard.html";

}


// Theme switch
function toggleTheme(){

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
    );

}


// Load theme
if(localStorage.getItem("theme") === "true"){

    document.body.classList.add("dark");

}
