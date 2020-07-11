$(document).ready(function () {
  $(".parallax").parallax();
  $(".sidenav").sidenav();

  const loginModal = document.getElementById("loginModal");
  const loginModalInstance = M.Modal.init(loginModal, { dismissible: true });

  const registerModal = document.getElementById("registerModal");
  const registerModalInstance = M.Modal.init(registerModal, {
    dismissible: true,
  });

  $("#loginForm").on("submit", function (e) {
    e.preventDefault();
    const newUser = {
      email: $("#loginEmail").val().trim(),
      password: $("#loginPassword").val().trim(),
    };
    loginUser(newUser).then(() => window.location.replace("/dashboard"));
  });

  $("#registerForm").on("submit", function (e) {
    e.preventDefault();
    const newUser = {
      email: $("#registerEmail").val().trim(),
      password: $("#registerPassword").val().trim(),
    };
    registerUser(newUser).then(() => location.replace("/"));
  });

  $(".signupBtn").on("click", function () {
    registerModalInstance.open();
  });

  $(".loginBtn").on("click", function () {
    loginModalInstance.open();
  });

  $("#loginCancel").on("click", function () {
    loginModalInstance.close();
  });

  $("#registerCancel").on("click", function () {
    registerModalInstance.close();
  });
});

const loginUser = (userObj) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "/api/login",
      data: userObj,
    }).then(
      (res) => resolve({ msg: "success" }),
      (err) => reject(err)
    );
  });
};

const registerUser = (userObj) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "/api/register",
      data: userObj,
    }).then(
      (res) => resolve(res),
      (err) => reject(err)
    );
  });
};
