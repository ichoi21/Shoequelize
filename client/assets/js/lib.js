$(document).ready(function () {
  $(".carousel").carousel();
  $("select").formSelect();
  $(".parallax").parallax();
  $(".sidenav").sidenav();
  $(".modal").modal();

  $("scripts").html(`
  <script src="./assets/js/landing.js"></script>
<script src="./assets/js/dashboard.js"></script>
<!-- <script src="./assets/js/searchbar.js"></script> -->

<script src="./assets/js/collection.js"></script>
<script src="./assets/js/contact.js"></script>
<script src="./assets/js/about.js"></script>
<script src="./assets/js/press.js"></script>
<script src="./assets/js/footer.js"></script>
  `);

  // var formatter = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  // });
});

// function stockx() {
//   $("#btnSearch").on("click", function (e) {
//     e.preventDefault();
//     query = $("#query").val();
//     shoeBrand = $("#shoeBrand").val();
//     shoeYr = $("#shoeYr").val();
//     shoeGdr = $("#shoeGdr").val();
//     console.log(shoeBrand, shoeYr, query, shoeGdr);
//     stockXSearch();
//   });
// }

// module.exports = { formatter, stockx };
