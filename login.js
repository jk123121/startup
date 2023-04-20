function login() {
    const nameEl = document.querySelector("#username");
    const passwordEl = document.querySelector("#password");
    const loginInfo = {
        username: nameEl.value,
        password: passwordEl.value
    }
    //localStorage.setItem("userName", nameEl.value);
    //localStorage.setItem("password", passwordEl.value);
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    window.location.href = "play.html";
  }
  