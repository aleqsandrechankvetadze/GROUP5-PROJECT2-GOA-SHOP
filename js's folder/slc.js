const registerBtn = document.getElementById("register-btn")
const loginBTn = document.getElementById("login-btn")
const storedUsermame = localStorage.getItem("name")
const mainBtnDiv = document.getElementById("nav-btns-div")

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

const back = document.getElementById("back")
const next = document.getElementById("next")
const img = document.getElementById("img")
const body = document.body

let count = 0

let images = [
    src = "../photos/sl-1.jpg",
    src = "../photos/slc-2.jpg",
    src = "../photos/slc-3.jpg",
]

next.addEventListener('click',function(){
    
    count+=1
    console.log(count)
    if(count >= images.length){
        count = 0
    }

    img.src = images[count]
})

back.addEventListener('click',function(){
    count -= 1

    if(count < 0){
        count = images.length - 1
    }
    img.src = images[count]
    })