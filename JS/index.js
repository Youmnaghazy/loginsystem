// signup
let signUpNameInput = document.getElementById("signUpNameInput");
let signupEmailInput=document.getElementById("signupEmailInput");
let signupPasswordInput = document.getElementById("signupPasswordInput");
let signUpMessage = document.getElementById("signUpMessage")
let signupButton = document.getElementById("signupButton")


let allusers =[]
if (localStorage.getItem('user')!=null){
    allusers = JSON.parse(localStorage.getItem('user'))
}

function signUp(){
    let user={
        name:signUpNameInput.value,
        email:signupEmailInput.value,
        password:signupPasswordInput.value
    }
    //inputs not empty
    if(signUpNameInput.value==''||signupEmailInput.value=='' || signupPasswordInput.value==''){
        signUpMessage.innerHTML='all inputs is required'
    }
    //email exists
    else if (oldmail()){
        signUpMessage.innerHTML ='email is already existed'
    }
    // success
    else
    {
        allusers.push(user)
        localStorage.setItem('user',JSON.stringify(allusers))
        signUpMessage.innerHTML = 'success'

    }


}
function oldmail(){
    for(let i=0 ; i<allusers.length ; i++){
        if(signupEmailInput.value == allusers[i].email){
             return true;
        }

    }
    return false;
}
if (signupButton!= null){
    signupButton.addEventListener('click',signUp)

}




// login
let loginEmailInput=document.getElementById('loginEmailInput')
let loginPasswordInput=document.getElementById('loginPasswordInput');
let loginMessage=document.getElementById("loginMessage");
let loginButton=document.getElementById("loginButton");

function login(){
    //input empty
    if (loginEmailInput.value==''|| loginPasswordInput==''){
        loginMessage.innerHTML ='all inputs is requierd'
    }
    else if(oldUser()==false){
        loginMessage.innerHTML='incorrect email or password'
    }
    else{
        loginButton.href ='home.html'
    }
}
function oldUser(){
for( let i =0;i<allusers.length;i++){
    if (loginEmailInput.value == allusers[i].email &&loginPasswordInput.value==allusers[i].password){
        localStorage.setItem("currentuser",JSON.stringify(allusers[i].name))
        return true;
    }

}
return false;

}
if(loginButton!=null){
loginButton.addEventListener('click' , login)}

//welcome
let homeParagraph = document.getElementById("homeParagraph")
if (homeParagraph!=null){
    var username = JSON.parse(localStorage.getItem("currentuser"))
    homeParagraph.innerHTML =`Welcome ${username}`
}