// SURVEY HUB SCRIPT.JS


document.addEventListener("DOMContentLoaded",()=>{


    // Check logged in user

    const user = localStorage.getItem("surveyUser");


    const startBtn = document.querySelector(".btn");


    if(startBtn){


        startBtn.addEventListener("click",(e)=>{


            if(user){

                startBtn.href="dashboard.html";

            }else{

                startBtn.href="register.html";

            }


        });


    }



    // Smooth scrolling

    const links = document.querySelectorAll("a");


    links.forEach(link=>{


        link.addEventListener("click",()=>{

            link.style.opacity="0.7";


        });


    });



    // Welcome animation

    const hero = document.querySelector(".hero-box");


    if(hero){

        hero.style.opacity="0";

        hero.style.transform="translateY(40px)";


        setTimeout(()=>{

            hero.style.transition="0.8s";

            hero.style.opacity="1";

            hero.style.transform="translateY(0)";


        },300);


    }



});




// Logout function

function logout(){


    localStorage.removeItem("surveyUser");


    window.location.href="index.html";


}




// Demo notification

function showMessage(message){


    alert(message);


}
