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

// Or with jQuery

// $(document).ready(function () {

// });

// function sendLoginInfo() {
//   $.ajax({
//     type: "POST",
//     url: "/api/login",
//     dataType: "json",
//     data: {
//       username: $("#userName").value,
//       password: $("#userPassword").value,
//     },
//   }).then(function (response) {
//     console.log(response);
//   });
//   return false;
// }
