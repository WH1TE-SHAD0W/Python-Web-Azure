let practices = [];
let company = '';
function setLocalStorage() {
    localStorage.setItem("common_tool", 'Wrong');
    localStorage.setItem("devopsGoal", document.getElementById("devopsGoal").value);
    for (let i = 1; i < 6; i++) {
        if (document.getElementById(`practices${i}`).checked === true) {
            practices.push(document.getElementById(`practices${i}`).value)
        }
    }
    localStorage.setItem('practices1', practices[0]);
    localStorage.setItem('practices2', practices[1]);
    company = document.getElementById('cloudService').value;
    localStorage.setItem("stage_count", document.getElementById("stageCount").value);
    localStorage.setItem("dateOfCreation", document.getElementById("creationOfDevops").value);
    localStorage.setItem("companyName", company);
    localStorage.setItem("successColor", document.getElementById("successColor").value);
    localStorage.setItem("moto", document.getElementById("moto").value);
    radioCheck = document.getElementById('tool3');
    if (radioCheck.checked) {
        localStorage.setItem("common_tool", 'Docker');
    }
}

function displayResult() {
    let rightAnswer = 0;
    if (localStorage.getItem("devopsGoal") === "Collaboration between Development and Operations teams") {
        rightAnswer++
    }
    if (localStorage.getItem('practices1') === "Continuous Integration" && localStorage.getItem('practices2') === "Continuous Deployment") {
        rightAnswer++
    }
    if (localStorage.getItem("common_tool") === "Docker") {
        rightAnswer++
    }
    if (localStorage.getItem("stage_count") === "3") {
        rightAnswer++
    }
    if (localStorage.getItem("dateOfCreation") === "2009-08-01") {
        rightAnswer++
    }
    if (localStorage.getItem("companyName") === "Microsoft" || localStorage.getItem("companyName") === "Amazon" || localStorage.getItem("companyName") === "Google") {
        rightAnswer++
    }
    if (localStorage.getItem("successColor") === "#00ff00") {
        rightAnswer++
    }
    if (localStorage.getItem("moto") === "CAMS") {
        rightAnswer++
    }
    // document.getElementById('resultsText').innerHTML += rightAnswer;
    // document.getElementById('resultsText').innerHTML += localStorage.getItem('stage_count');
    document.getElementById('resultsText').innerHTML = `<p>You guessed the right answer ${rightAnswer} times </p>`;
}
