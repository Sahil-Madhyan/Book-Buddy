function download_Book(id) {
  if (id == "1") {
    window.open("https://b-ok.asia/dl/21908522/4b3cbd");
  } else if (id == "2") {
    window.open("https://b-ok.asia/dl/2827033/e34a3a?jsh=d1f126caa078dbbb");
  } else if (id == "3") {
    console.log("1 clicked");
    window.open("https://b-ok.asia/dl/5312618/2f94e6");
  } else if (id == "4") {
    console.log("1 clicked");
    window.open("https://b-ok.asia/dl/5002783/3dffa3?dsource=recommend");
  } else {
    console.log("No");
  }
}
function signUp() {
    var email = document.getElementById("signemail").value;
    var atPos = email.indexOf("@");
    var gmail = email.indexOf("gmail");
    var dotPos = gmail + 5;
    var com = email.indexOf("com");
  if (email.charAt(atPos) == "@" && email.charAt(dotPos) == "." && email.charAt(com)) {
    alert("Daily Newsletter will be send to " + email);
    document.getElementById("signemail").value = '';
  }
  else {
    alert("Enter valid email");
    document.getElementById("signemail").value = '';
  }
  
}