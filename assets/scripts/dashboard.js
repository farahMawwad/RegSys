usersArray = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("currentUser"))
    : [];
let array = JSON.parse(localStorage.getItem("currentUser"));

console.log(usersArray)
console.log(array.progressbar)


let name_user =document.getElementById("name_user")
let range =document.getElementById("range")
name_user.textContent=`${array.firstName} ${array.secondName}`;
let done_button = document.getElementById('done')
done_button.disabled = true;

let info = document.getElementById('info')
let tech = document.getElementById('tech')
let eng = document.getElementById('eng')
if (array.progressbar==33)
{
    range.style.width='33%'
info.href=""

}
else if(array.progressbar==66){
    range.style.width='66%'
eng.href=""
}
else if(array.progressbar>66){
    range.style.width='100%'
    tech.href=""
    done_button.disabled=false;

}

console.log(name);
done_button.addEventListener('click',()=>{
    alert('You have successfully completed the registration process')
})
