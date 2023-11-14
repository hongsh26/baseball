const loginId = document.getElementById("LOGIN_EMAIL");
const loginPwd = document.getElementById("LOGIN_PWD");
const loginBtn = document.getElementById("LOGIN_BTN");

loginBtn.addEventListener("click", () => {
  // event.preventDefault();
  const username = loginId.innerText;
  const password = loginPwd.innerText;
  if (username === "abcd" && password === "1234") {
    alert("You have successfully logged in.");
    // location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
