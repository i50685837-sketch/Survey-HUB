// SURVEY HUB DASHBOARD.JS


document.addEventListener("DOMContentLoaded", () => {


    // Check user login

    const user = localStorage.getItem("surveyUser");


    if(!user){

        window.location.href = "login.html";

        return;

    }



    // Display username

    const username = document.getElementById("username");


    if(username){

        username.innerHTML = user;

    }



    // Load account data

    let account = JSON.parse(
        localStorage.getItem("surveyAccount")
    );



    if(account){


        let balance = document.getElementById("balance");

        let completed = document.getElementById("completed");


        if(balance){

            balance.innerHTML =
            "KSh " + account.balance;

        }


        if(completed){

            completed.innerHTML =
            account.completed + " Surveys";

        }


    }



});





// Start survey

function startSurvey(name, reward){


    let account = JSON.parse(
        localStorage.getItem("surveyAccount")
    );


    if(account){


        account.balance =
        account.balance + reward;


        account.completed =
        account.completed + 1;


        localStorage.setItem(
            "surveyAccount",
            JSON.stringify(account)
        );


        alert(
            name +
            " completed 🎉\nYou earned KSh "
            + reward
        );


        location.reload();


    }

}





// Upgrade button

function upgradeAccount(){


    alert(
        "Upgrade feature coming soon 🚀"
    );


}





// Logout

function logout(){


    localStorage.removeItem(
        "surveyUser"
    );


    window.location.href =
    "index.html";


}
