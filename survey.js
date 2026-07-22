// SURVEY HUB SURVEY.JS


const surveyForm = document.getElementById("surveyForm");


if(surveyForm){


surveyForm.addEventListener("submit", function(e){


e.preventDefault();



let questions = 10;

let answered = 0;



// Check answered questions

for(let i = 1; i <= questions; i++){


let answer = document.querySelector(
`input[name="q${i}"]:checked`
);


if(answer){

answered++;

}


}




if(answered < questions){


alert(
"Please answer all questions before submitting ⚠️"
);


return;


}




// Get account

let account = JSON.parse(
localStorage.getItem("surveyAccount")
);



if(account){



let reward = 150;


// Add money

account.balance =
(account.balance || 0) + reward;



// Count completed surveys

account.completed =
(account.completed || 0) + 1;



localStorage.setItem(
"surveyAccount",
JSON.stringify(account)
);



alert(
"Survey completed successfully 🎉\nYou earned KSh "
+ reward
);



window.location.href =
"dashboard.html";



}else{


alert(
"Please login first"
);


window.location.href =
"login.html";


}



});


}
