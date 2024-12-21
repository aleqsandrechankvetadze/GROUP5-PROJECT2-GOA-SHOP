const registerBtn = document.getElementById("register-btn")
const loginBTn = document.getElementById("login-btn")
const storedUsermame = localStorage.getItem("name")
const mainBtnDiv = document.getElementById("nav-btns-div")
const form = document.getElementById("form")
const inputFile = document.getElementById("file")
const carName = document.getElementById("car-name")
const price = document.getElementById("price")
const category = document.getElementById("category")
const engine = document.getElementById("engine")
const submitBtn = document.getElementById("submit-btn")
const input = document.getElementsByClassName('input')



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

submitBtn.addEventListener('click',function(e){
    e.preventDefault()

    console.log("adsad")

    if(category.value === ""){
        alert('Please fill all fields')
        carName.value = ""
        price.value = ""
        category.value = ""
        engine.value = ""
    }else{
        alert("Your car has been solled successfully")
        carName.value = ""
        price.value = ""
        category.value = ""
        engine.value = ""
        form.reset()
    }
})