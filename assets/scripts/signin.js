
let usersArray = new Array();
let signIn_btn = document.querySelector("#signIn-btn");
usersArray = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
let array = JSON.parse(localStorage.getItem("users"));
console.log(usersArray)

signIn_btn.addEventListener("click", (e) => {
    let userEmail = document.querySelector("#email");
    let userPassword = document.querySelector("#pass");
    if (userEmail.value === "" || userPassword.value === "")
      return (alert("please enter the password & email"));
    //if user exist and email match the password
    let existsUser = array.find(
      (user) =>
        user.email === userEmail.value && user.password === userPassword.value
    );
    if (existsUser) {
      //local storage of current user , currentUser is the key of: existUser
      localStorage.setItem("currentUser", JSON.stringify(existsUser));
      window.location = "dashboard.html";
    }
    //if user not exist or email does not match password
    else {
      alert("Email or password is not correct");
    }
  });