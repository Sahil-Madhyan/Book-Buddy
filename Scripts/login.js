function login() {
  var userName = document.getElementById("user").value;
  var psswd = document.getElementById("psswd").value;
  if (userName == "sahilmadhyan" && psswd == "sahil123") {
    alert("Login Successful");
    document.getElementById('login').innerHTML = userName;
    window.open("https://sahil-madhyan.github.io/Book-Buddy/", "_self");
  } else {
    alert("Login Failed");
  }
}
