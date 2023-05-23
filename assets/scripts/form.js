
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
