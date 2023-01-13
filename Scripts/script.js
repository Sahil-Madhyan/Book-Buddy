function download_Book(id) {
  if (id == "1") {
    window.open(
      "https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_1?crid=3NV856NGE03O2&keywords=Atomic+Habits&qid=1673624539&sprefix=atomic+habits%2Caps%2C250&sr=8-1"
    );
  } else if (id == "2") {
    window.open(
      "https://www.amazon.in/Ego-Enemy-Ryan-Holiday/dp/1781257019/ref=sr_1_1?crid=3RN4CJJBYNV8X&keywords=ego+is+the+enemy&qid=1673624594&sprefix=Ego%2Caps%2C218&sr=8-1"
    );
  } else if (id == "3") {
    window.open(
      "https://www.amazon.in/Ikigai-H%C3%A9ctor-Garc%C3%ADa/dp/178633089X/ref=sr_1_3?crid=2LNX4X3EODYLQ&keywords=Ikigai&qid=1673624404&sprefix=ikiga%2Caps%2C409&sr=8-3"
    );
  } else if (id == "4") {
    window.open(
      "https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=sr_1_3?keywords=rich+dad+poor+dad+book&qid=1673624675&sprefix=Rich%2Caps%2C214&sr=8-3"
    );
  } else if(id == 5){
    window.open(
      "https://www.amazon.in/Mindset-Techniques-Negativity-Positive-Takeover-ebook/dp/B077F2NN1J/ref=sr_1_1?crid=1BE8I4AJLV8BA&keywords=Mindse&qid=1673624760&sprefix=mindse%2Caps%2C221&sr=8-1"
    );
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
