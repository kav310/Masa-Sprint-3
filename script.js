var userData = [
  {
    userName: "johnnson",
    password: "john",
  },
  {
    userName: "michale",
    password: "mic",
  },
  {
    userName: "petterson",
    password: "petter",
  },
  {
    userName: "royann",
    password: "roy",
  },
];
function redirect() {
  event.preventDefault();
  var userInput = document.getElementById("userName").value;
  var passwordInput = document.getElementById("password").value;
  var div = document.getElementById("res");
  for (var i = 0; i < userData.length; i++) {
    if (
      userInput == userData[i].userName &&
      passwordInput == userData[i].password
    ) {
      window.location.assign("./home.html");
    } else {
      var warning = document.createElement("p");
      warning.textContent = "Enter Incorrect UseName or Password!!";
      warning.style.color = "red";
    }
  }
}

window.addEventListener("load", function () {
  var button = document.getElementById("login");
  button.addEventListener("click", redirect);
});
