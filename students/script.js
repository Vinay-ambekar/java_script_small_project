
function login(){
    const email=document.getElementById("email").value 
const password=document.getElementById("password").value
if(email == "admin@gmail.com" && password =="admin"){
    window.location.assign("student_page.html");
    alert("login succefully")
}
else{
    if (email !== "admin@gmail.com") {
        alert("Invalid email");
      } else {
        alert("Invalid password");
      }
    
    
}

}