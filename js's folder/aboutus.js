const registerBtn = document.getElementById("register-btn")
const loginBTn = document.getElementById("login-btn")
const storedUsermame = localStorage.getItem("name")
const mainBtnDiv = document.getElementById("nav-btns-div")

const img = document.getElementById("main-nika-img")

if (storedUsermame){
    const signedUseranme = document.createElement("p")
    signedUseranme.textContent = `Signed in as: ${storedUsermame}`
    
    const registerBtn = document.getElementById("register-btn")
    const loginBtn = document.getElementById("login-btn")

    registerBtn.remove()
    loginBtn.remove()

    mainBtnDiv.appendChild(signedUseranme)
    signedUseranme.style.fontSize = "22px"
    signedUseranme.style.color = "white"
    signedUseranme.style.textTransform = "capitalize";
}

let newSrc = "../photos/408864179_342479481868687_2724919989645877908_n.jpg"

img.addEventListener('mouseover',function(){
    img.src = newSrc;
    img.style.opacity = 1;
})

img.addEventListener('mouseout',function(){
    img.src =  "../photos/nikakeshelava.jpg";
    img.style.opacity = 1;
})