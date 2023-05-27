
window.addEventListener('load',()=>{
    const input=document.querySelector('.input_Form');
    let save_Data=localStorage.getItem('FirstName');
    input.value=save_Data;
    input.addEventListener('change',()=>{
        localStorage.setItem('FirstName',input.value)
    })
    let last_Name=document.querySelector('.last_Name_Input')
    let save_Data_Last=localStorage.getItem('LastName');
    last_Name.value=save_Data_Last;
    last_Name.addEventListener('change',()=>{
        localStorage.setItem('LastName',last_Name.value)
    })
    let email=document.querySelector('.email_Input');
    let save_Data_Email=localStorage.getItem('Email');
    email.value=save_Data_Email
    email.addEventListener("change",()=>{
        localStorage.setItem('Email',email.value)
    })
    let phone_Input=document.querySelector('.phone_Input');
    let save_Data_phone=localStorage.getItem('phone')
    phone_Input.value=save_Data_phone
    phone_Input.addEventListener('change',()=>{
        localStorage.setItem('phone',phone_Input.value)
    })
    let birthday_Input=document.querySelector('.birthday_Input');
    let save_Data_Birthday=localStorage.getItem('Birthday');
    birthday_Input.value=save_Data_Birthday
    birthday_Input.addEventListener('change',()=>{
        localStorage.setItem('Birthday',birthday_Input.value)
    })

let gender_select = document.getElementById('gender_select');
let save_Data_gender = localStorage.getItem('gender');

if (save_Data_gender) {
  gender_select.value = save_Data_gender;
}

gender_select.addEventListener("change", () => {
  localStorage.setItem('gender', gender_select.value);

});
    let nationality_Input=document.querySelector('.nationality_Input');
    let save_Data_nationality=localStorage.getItem('nationality');
    nationality_Input.value=save_Data_nationality;
    nationality_Input.addEventListener('change',()=>{
        localStorage.setItem('nationality',nationality_Input.value)
    })
    let education_Input=document.querySelector('.education_Input');
    let save_Data_Education=localStorage.getItem('education')
    education_Input.value=save_Data_Education;
    education_Input.addEventListener("change",()=>{
        localStorage.setItem("education",education_Input.value)
    })
})
<<<<<<< HEAD

=======
//------------------------------------------------------------------------------------------------------
let array = JSON.parse(localStorage.getItem("users"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log("array-------")
console.log(array)
console.log("currentUser-------")
console.log(currentUser)

updateInfo()
console.log("test")
function updateInfo(){
    // if (
    //     fullName.value !== "" &&
    //     address.value !== "" &&
    //     phone.value !== "" &&
    //     birthday.value !== "" &&
    //     nationality.value !== "" &&
    //     gender.value !== ""
    //     education_level.value !== ""
    //     major.value !== ""
    //   ) {
        //flag
        console.log(array.info)
        currentUser.progressbar +=33;
        currentUser.info = true;
        //to add value of current user(before was: null)
        currentUser.userInfo= {
            //object
            fullName: "farah",//fullName input
            address: "zarqa",
            phone: "07777777",
            birthday: "12-5-1999",
            nationality: "jordanian",
            gender: "female",
            education_level: "pachalor",
            major:"softeng",
          }
    // }
    const updateArr = array.map((ele) => {
        return ele.email === currentUser.email
          ? {
              ...ele, //just update on key of the elements
              progressbar:currentUser.progressbar,
              info: true,
              userInfo: {
                //object
                fullName: "farah",//fullName input
                address: "zarqa",
                phone: "0785255159",
                birthday: "12-5-2021",
                nationality: "jordanian",
                gender: "female",
                education_level: "pachalor",
                major:"softeng",
              }
            }
          : ele;
      });

      localStorage.setItem("users", JSON.stringify(updateArr));
  
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

//------------------------------------------------------------------------------------------------------
>>>>>>> b3a359b16ecc269b252100d25c35c0b276f05a15
