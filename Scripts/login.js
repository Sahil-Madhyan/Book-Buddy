var log = document.getElementById("loginForm");
log.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    login();
  }
});
function login() {
  var userName = document.getElementById("user").value;
  var psswd = document.getElementById("psswd").value;
  if (userName == "sahilmadhyan" && psswd == "sahil123") {
    alert("Welcome " + userName);
    window.location.href = "./index.html";
  } else {
    alert("Login Failed");
  }
}
