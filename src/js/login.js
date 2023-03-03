/*
  Login
*/
const areaLogin = document.querySelector("#area-login");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const areaGreeting = document.querySelector("#area-greeting");
const areaTodoWeather = document.querySelector("#area-todoweather");
const areaQuotes = document.querySelector("#area-quotes");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (event) => {
  event.preventDefault();
  areaLogin.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};

const paintGreetings = (username) => {
  areaGreeting.querySelector(
    "p"
  ).innerText = `춘식이를 사랑하는 ${username} 님 환영합니다!`;
  areaGreeting.classList.remove(HIDDEN_CLASSNAME);
  areaTodoWeather.classList.remove(HIDDEN_CLASSNAME);
  areaQuotes.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  areaLogin.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
