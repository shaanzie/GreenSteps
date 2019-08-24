var name = window.sessionStorage.getItem('Name');
if(!name)
{
    alert("Logout!");
    window.location.href = "signup.html";
}