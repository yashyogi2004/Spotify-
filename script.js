function validateLogin() {
    let username = document.querySelector("#Email").value;
    let password = document.querySelector("#Password").value;
    
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        console.log("Login successful for: " + username);
        alert("Login successful!");
    }
}
let login =document.querySelector("button");
login.addEventListener("click",()=>{
    validateLogin();
});
