const mail = document.getElementById("email")
const pass = document.getElementById("password")


mail.addEventListener("click", () => {
    mail.placeholder = " "
})

mail.addEventListener("blur", () => {
    mail.placeholder = "Enter your email"
})

pass.addEventListener("click", () => {
    pass.placeholder = " "
})
pass.addEventListener("blur", () => {
    pass.placeholder = "Create a password"
})