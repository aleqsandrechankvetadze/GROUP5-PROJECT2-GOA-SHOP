const btn = document.getElementById("btn")
const form = document.getElementById("form")

let newAcc = []

btn.addEventListener('click',function(e){
    e.preventDefault()

    let newNameValue = form.elements.name.value
    let newEmailValue = form.elements.email.value
    let newPasswordValue = form.elements.password.value

    newAcc.push(
        {
            name: newNameValue,
            email: newEmailValue,
            password: newPasswordValue
        }
    )

    alert("Acount was created succesfully")
    
    localStorage.setItem("name",newNameValue)
    console.log(localStorage.name)
    
    window.location.href = "../html's folder/index.html"

    form.elements.name.value = ""
    form.elements.email.value = ""
    form.elements.password.value = ""

    console.log(newAcc)
})