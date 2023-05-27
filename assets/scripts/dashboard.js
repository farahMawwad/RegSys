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


if (array.progressbar==33)
{
    range.style.width='33%'
}
else if(array.progressbar==66){
    range.style.width='66%'
}
else if(array.progressbar>66){
    range.style.width='100%'
    done_button.disabled=false;
}

console.log(name);
done_button.addEventListener('click',()=>{
    alert('You have successfully completed the registration process')
})
