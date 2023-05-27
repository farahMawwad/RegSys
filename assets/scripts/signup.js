//define a local storage array to store users info
let users = JSON.parse(localStorage.getItem("users")) || [];

// define sign up button
document.getElementById("signUp-btn").addEventListener("click", saveData);

//DOM elements
let firstName = "";
let secondName = "";
let email = "";
let passwordInput = "";
let conPassInput = "";
let emailFlag;
let passwordFlag;

function saveData() {
  firstName = document.querySelector("#firstName").value;
  secondName = document.querySelector("#secondName").value;
  email = document.querySelector("#email").value;

  //call validateEmail function
  let emailIsValid = validateEmail(email);
  if (emailIsValid) {
    emailFlag = true;
  } else {
    emailFlag = false;
    alert("please enter a valid email");
  }
  //check if pass is valid and match with conPass
  passwordInput = document.querySelector("#pass").value;
  conPassInput = document.querySelector("#conPass").value;

  if (passwordInput == conPassInput) {
    let PassIsValid = validatePassword(passwordInput);
    if (PassIsValid) {
      passwordFlag = true;
    } else {
      alert(
        "please enter a 8-16 character password, password must contain at least one special character,one upperCase letter"
      );
      passwordFlag = false;
    }
  } else {
    alert("password confirmation does not match");
    passwordFlag = false;
  }

  console.log(firstName);
  console.log(secondName);
  console.log(email);
  console.log(passwordInput);
  console.log(conPassInput);
  console.log(emailIsValid);
  console.log(passwordFlag);

  if (passwordFlag && emailFlag) {
    let username = firstName.concat(secondName);
    let user = {
      userName: username,
      firstName: firstName,
      secondName: secondName,
      email: email,
      password: passwordInput,
      progressbar:0,
      //flags
      info: false,
      techFlag: false,
      englishFlag: false,
      //user info From Form page
      userInfo: {
        //object
        fullName: null,
        address: null,
        phone: null,
        birthday: null,
        nationality: null,
        gender: null,
        education_level: null,
        major:null,
      },
      // to save user score
      englishScore: null,
      techScore: null,
    };

    const isExist = users.find((ele) => ele.email === user.email);
    if (isExist) return alert("Email is already exist");
    //save user object in usersArray
    else {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    }

    location.href = "../html/signin.html";
  }
}

function validateEmail(email) {
  // Regular expression pattern for email validation
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the pattern
  return pattern.test(email);
}

function validatePassword(password) {
  // Regular expression patterns for password validation
  const lengthPattern = /^.{8,16}$/;
  const uppercasePattern = /[A-Z]/;
  const lowercasePattern = /[a-z]/;
  const specialCharacterPattern = /[!@#$%^&*]/;
  const numberPattern = /[0-9]/;

  // Check password length
  if (!lengthPattern.test(password)) {
    return false;
  }

  // Check if password contains an uppercase letter
  if (!uppercasePattern.test(password)) {
    return false;
  }

  // Check if password contains a lowercase letter
  if (!lowercasePattern.test(password)) {
    return false;
  }

  // Check if password contains a special character
  if (!specialCharacterPattern.test(password)) {
    return false;
  }

  // Check if password contains a number
  if (!numberPattern.test(password)) {
    return false;
  }

  // If all conditions pass, the password is valid
  return true;
}
