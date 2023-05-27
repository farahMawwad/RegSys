
let full_Name=document.querySelector('.input_Form')
let address=document.querySelector('.address_Input');
let phone_Input=document.querySelector('.phone_Input');
let birthday_Input=document.querySelector('.date_Input');
let nationality_Input=document.querySelector('.nationality_Input');
let gender_select = document.getElementById('gender_select');
let education_Input=document.querySelector('.education_Input');
let major=document.querySelector('.major_Dep');

// window.addEventListener('load',()=>{

//     let save_Data_Last=localStorage.getItem('LastName');
//     full_Name.value=save_Data_Last;
//     full_Name.addEventListener('change',()=>{
//         localStorage.setItem('LastName',full_Name.value)
//     })
//     let save_Data_Email=localStorage.getItem('Email');
//     address.value=save_Data_Email
//     address.addEventListener("change",()=>{
//         localStorage.setItem('Email',address.value)
//     })
//     let save_Data_phone=localStorage.getItem('phone')
//     phone_Input.value=save_Data_phone
//     phone_Input.addEventListener('change',()=>{
//         localStorage.setItem('phone',phone_Input.value)
//     })
//     let save_Data_Birthday=localStorage.getItem('Birthday');
//     birthday_Input.value=save_Data_Birthday
//     birthday_Input.addEventListener('change',()=>{
//         localStorage.setItem('Birthday',birthday_Input.value)
//     })
//     let save_Data_nationality=localStorage.getItem('nationality');
//     nationality_Input.value=save_Data_nationality;
//     nationality_Input.addEventListener('change',()=>{
//         localStorage.setItem('nationality',nationality_Input.value)
//     })

// let save_Data_gender = localStorage.getItem('gender');

// if (save_Data_gender) {
//   gender_select.value = save_Data_gender;
// }

// gender_select.addEventListener("change", () => {
//   localStorage.setItem('gender', gender_select.value);

// });
// let save_Data_Education=localStorage.getItem('education')
// education_Input.value=save_Data_Education
// education_Input.addEventListener("change",()=>{
//     localStorage.setItem("education",education_Input.value)
// })
// ///not complete
// let save_Data_Major=localStorage.getItem('major')
// major.value=save_Data_Major;
// major.addEventListener("change",()=>{
//     localStorage.setItem("major",major.value)
// })
// // updateInfo()

// })

//------------------------------------------------------------------------------------------------------
let array = JSON.parse(localStorage.getItem("users"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
// console.log("array-------")
// console.log(array)
console.log("currentUser-------")
console.log(currentUser)
let submit_btn = document.getElementById("submit");

function updateInfo(){
    if ( full_Name.value !== "" &&
   address.value !== "" &&
    phone_Input.value !== "" &&
    birthday_Input.value !== "" &&
    nationality_Input.value !== "" &&
    gender_select.value !== "" &&
    education_Input.value !=="" &&
    major.value !==""
    )

      {
        //flag
        // currentUser.progressbar =33;
        currentUser.info = true;
        //to add value of current user(before was: null)
        currentUser.userInfo= {
            //object
            fullName:full_Name.value,
            address: address.value,
            phone:  phone_Input.value,
            birthday:  birthday_Input.value,
            nationality:nationality_Input.value,
            gender: gender_select.value,
            education_level:education_Input.value,
            major:major.value,
          }
          submit_btn.href = '../html/dashboard.html'
    }
    const updateArr = array.map((ele) => {
        return ele.email === currentUser.email
          ? {
              ...ele, //just update on key of the elements
              progressbar:currentUser.progressbar,
              info: true,
              userInfo: {
                //object
                fullName:full_Name.value,
                address: address.value,
                phone: phone_Input.value,
                birthday:  birthday_Input.value,
                nationality: nationality_Input.value,
                gender: gender_select.value,
                education_level: education_Input.value,
                major:major.value,
              }
            }
          : ele;
      });

      localStorage.setItem("users", JSON.stringify(updateArr));
  
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      

}
//------------------------------------------------------------------------------------------------------

