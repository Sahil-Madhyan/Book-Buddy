function download_Book(id) {
  if (id == "1") {
    window.open(
      "https://libgen.rocks/get.php?md5=96f997237d1fffe83467f130c350f275&key=VKS87H7672UIG214"
    );
  } else if (id == "2") {
    window.open(
      "https://libgen.rocks/get.php?md5=0cc0cf7948ead84332112cc0160efb3d&key=TV4VBE8U9D3U7LWS"
    );
  } else if (id == "3") {
    window.open(
      "https://libgen.rocks/get.php?md5=f31b5aa50e3b8a101c257085d0ed3ce2&key=R1KH6XNDQUHQBYR3"
    );
  } else if (id == "4") {
    window.open(
      "https://libgen.rocks/get.php?md5=7095db7134010f55d4987996a727be7d&key=P9P4U3EOEFY5BB1T"
    );
  } else if (id == 5) {
    window.open(
      "https://libgen.rocks/get.php?md5=9087c0c017eeaaf43b3d44199d4738c6&key=64W89MGKIQ3LBZNY"
    );
  }
}
function signUp() {
  var email = document.getElementById("signemail").value;
  var atPos = email.indexOf("@");
  var gmail = email.indexOf("gmail");
  var dotPos = gmail + 5;
  var com = email.indexOf("com");
  if (
    email.charAt(atPos) == "@" &&
    email.charAt(dotPos) == "." &&
    email.charAt(com)
  ) {
    alert("Daily Newsletter will be send to " + email);
    document.getElementById("signemail").value = "";
  } else {
    alert("Enter valid email");
    document.getElementById("signemail").value = "";
  }
}
var srch = document.getElementById("txtar");
srch.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    search();
  }
});
function search() {
  var query = document.getElementById("txtar").value;
  if (query == "") {
    alert("Search is empty");
  } else {
    var url = "https://libgen.is/search.php?req=" + query;
    document.getElementById('txtar').value = "";
    window.open(url);
  }
}
