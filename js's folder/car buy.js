const registerBtn = document.getElementById("register-btn")
const loginBTn = document.getElementById("login-btn")
const storedUsermame = localStorage.getItem("name")
const mainBtnDiv = document.getElementById("nav-btns-div")

// drowpdonw from html
// const dropdowns = document.querySelectorAll('.dropdown')

// images from html
const mercLogo = document.getElementById("merc-logo")
const bmwLogo = document.getElementById("bmw-logo")
const toyotaLogo = document.getElementById("toyota-logo")


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

// dropdowns.forEach(dropdown =>{
// const select = dropdown.querySelector('.select')
// const caret = dropdown.querySelector('.caret')
// const menu = dropdown.querySelector('.menu')
// const options = dropdown.querySelectorAll('.menu li')
// const selected = dropdown.querySelector('.selected')


//     select.addEventListener('click', () =>{
//         select.classList.toggle('select-clicked')
//         caret.classList.toggle('caret-rotate')
//         menu.classList.toggle('menu-open')
//     })

//     options.forEach(option => {
//         option.addEventListener('click', () =>{
//             selected.innerText = option.innerText
//             select.classList.remove('select-clicked')
//             caret.classList.remove('caret-rotate')
//             menu.classList.remove('menu-open')

//             options.forEach(option => {
//                 option.classList.remove('active')
//             })
//             option.classList.add('active')
//         })
//     })
// })
