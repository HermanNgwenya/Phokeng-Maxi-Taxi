///------DRIVER SCRIPT-------///

//SIGN UP FORM
const form = document.getElementById('maxi');
const maxiPh = document.getElementById('taxi');
const formDiv = document.getElementById('div_form')
const icon = document.getElementById('taxi_icon')
const logInButton = document.getElementById('logInButton')

logInButton.addEventListener('click', (e) => {
    e.preventDefault()

    if (formDiv.style.display === "none") {
        formDiv.style.display = "block";
        icon.style.display = "none"
        logInButton.style.display = "none"
    } else {
        formDiv.style.display = "none";
        icon.style.display = "block"
        logInButton.style.display = "block"
    }

});

formCommuter.addEventListener('submit', function (e) {
    e.preventDefault()

    let commuter = document.getElementById('commuterName').value;
    let emailCommuter = document.getElementById('commuterEmail').value;
    let passwordCreateCommuter = document.getElementById('commuterCreatePassword').value;
    let passwordConfirmCommuter = document.getElementById('commuterConfirmPassword').value;

    //storing driver data to localstorage

    localStorage.setItem('commuterName', commuter);
    localStorage.setItem('commuterEmail', emailCommuter);
    localStorage.setItem('commuterCreatePassword', passwordCreateCommuter);
    localStorage.setItem('commuterConfirmPassword', passwordConfirmCommuter);

    formCommuter.reset();
    alert('Commuter stored in local storage successfully!');

    commuterLoginDiv.style.display = "block";
    commuterDiv.style.display = "none"

});

//COMMUTER LOGIN FORM

const commuterLoginDiv = document.getElementById('commuter_formLogin');
const commuterLoginForm = document.getElementById('commuter_login');
const commuterBackBtn = document.getElementById('commuterBack');
const commuterLogin = document.getElementById('loginCommuter');

commuterLogin.addEventListener('click', (e) => {
    e.preventDefault()

    if (commuterLoginDiv.style.display === "none") {
        commuterLoginDiv.style.display = "block";
        commuterDiv.style.display = "none"
        commuterIcon.style.display = "none"
        icon.style.display = "none"
    } else {
        commuterLoginDiv.style.display = "none";
        commuterDiv.style.display = "block";
        commuterIcon.style.display = "block"
        icon.style.display = "block"
    }

});

commuterBackBtn.addEventListener('click', (e) => {
    e.preventDefault()

    window.location.href = 'maxi.html';
});

commuterLoginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input values entered by the driver
    let enteredCommuterName = document.getElementById('nameCommuter').value;
    let enteredCommuterPassword = document.getElementById('commuterPassword').value;

    // Retrieve the stored driver data from localStorage
    let storedCommuterName = localStorage.getItem('commuterName');
    let storedCommuterPassword = localStorage.getItem('commuterCreatePassword');

    // Validate the entered driver name and password
    if (enteredCommuterName === storedCommuterName && enteredCommuterPassword === storedCommuterPassword) {
        // Login successful
        alert('Login successful!');
        window.location.href = 'commuterDashB.html';
    } else {
        // Login failed
        console.log('Invalid driver name or password. Please try again.');
    }

    // Reset the form inputs
    loginForm.reset();

    alert('login successful!')

    window.location.href = 'commuterDashB.html';
});