document.addEventListener("DOMContentLoaded", function () {
  var options = null;
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});

$(document).ready(function () {
  $(".carousel").carousel();
  $(".fixed-action-btn").floatingActionButton();
});

document.addEventListener("DOMContentLoaded", function () {
  var options = null;
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, options);
});

//Login Function below - grabs input of email and pw to validate
$(document).ready(function () {
  const form = $("#loginForm");
  const email = $("#email");
  const pw = $("#password");

  form.on("submit", function (e) {
    e.preventDefault();

    loginUser(email.val(), pw.val()).then(() =>
      window.location.replace("/members")
    );
  });
});

const loginUser = (email, password) => {
  const userData = { email, password };
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "/api/login",
      data: userData,
    }).then((res) => resolve(res));
  });
};
