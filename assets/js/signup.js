/*fuctions to switch between login page and signup page*/
/*shows login page and hides registration*/
function login(){
    document.getElementById('login').style.display = "none";
    document.getElementById('signup').style.display = "block";
    }
    /*hides login page and displays signu page*/
function signup(){
    document.getElementById('signup').style.display = "none";
    document.getElementById('login').style.display = "block";
    }
/*calls the function to display loginpage by default*/
login();


/*function to register a user*/
function signup(){
    event.preventDefault();
    //get input fields values from the form
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("cpassword").value;

    
    //form validation
    //check if name input in empty
    if (username == ""){
        alert("Name required.");
        return ;
    }
    //check if email input in empty
    else if (email == ""){
        alert("Email required.");
        return ;
    }
    // else if (email.value.match(emailFormat)){
    //     alert("Write a valid email address");
    //     return ;
    // }
    //check if password input in empty
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    // else if (password.value.length >= 6){
    //     alert("Password too short.");
    //     return ;

    // }
     //check if confirm input in empty
    else if (confirmPassword == ""){
        alert("Confirm Password required.");
        return ;
    }
    // compares if confirm password matches password 
    else if ( password != confirmPassword){
        alert("Password don't match retype your Password.");
        return;
    }

    //if validation is checked write data to array
    else if(emailArray.indexOf(email) == -1){
        usernameArray.push(username);
        emailArray.push(email);
        passwordArray.push(password);

        alert("Signup succesful. \nLogin Now");
        //open login form
        login();
        //reset the input fields
        // document.getElementById('username').value="";
        // document.getElementById("email").value ="";
        // document.getElementById("password").value="";
        // document.getElementById("cpassword").value="";
    }
    //if email is already used then..
    else{
        alert(email + "is already registered to an account");
        return ;
    }
}

//log in submit button function

function signin(){
    event.preventDefault();
     //get input fields values from the form
    var email = document.getElementById("lemail").value;
    var password = document.getElementById("lpassword").value;
    //initialize registered accounts to a variable
    var i = emailArray.indexOf(email);

    //input fields validation
    //check if email field is empty and if email exists as registered account
    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    //check if password field is empty and if password is kinked to any email
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    //if verification true..
    else {
        alert(email + " Login Successful.");
        //window.location.
        return ;
    }

}

