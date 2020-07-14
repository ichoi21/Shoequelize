//Sign Up function below but its name first_name and last_name inputs

$(document).ready(function () {
  const form = $("#registerForm");
  const email = $("#email");
  const pw = $("#password");

  form.on("submit", function (e) {
    e.preventDefault();
    registerUser(email.val(), pw.val()).then(() =>
      window.location.replace("/members")
    );
  });
});

const registerUser = (email, password) => {
  const userData = { email, password };
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "/api/signup",
      data: userData,
    }).then((res) => resolve(res));
  });
};
