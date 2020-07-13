// COMMENTED THIS SECTION FOR NOW SINCE GETTING AN ERROR FOR "options is not declared"
// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".carousel");
//   var instances = M.Carousel.init(elems, options);
// });

$(document).ready(function () {
  $(".carousel").carousel();
});

// COMMENTED THIS SECTION FOR NOW SINCE GETTING AN ERROR FOR "options is not declared"
// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".fixed-action-btn");
//   var instances = M.FloatingActionButton.init(elems, options);
// });

// Or with jQuery

$(document).ready(function () {
  $(".fixed-action-btn").floatingActionButton();

  //**************************************************************
  // js section that appends the shoes on search to the home.html
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  stockx();

  function stockx() {
    $("#btnSearch").on("click", function (e) {
      e.preventDefault();
      query = $("#query").val();
      shoeBrand = $("#shoeBrand").val();
      shoeYr = $("#shoeYr").val();
      shoeGdr = $("#shoeGdr").val();
      console.log(shoeBrand, shoeYr, query, shoeGdr);
      stockXSearch();
    });
  }
  function stockXSearch() {
    $.ajax({
      type: "GET",
      url: `https://stockx.com/api/browse?&_search=${query}&year=${shoeYr}&brand=${shoeBrand}&gender=${shoeGdr}`,
      dataType: "json",
    }).then(function (shoe) {
      for (let i = 0; i < 5; i++) {
        let year = shoe.Products[i].year;
        let brand = shoe.Products[i].brand;
        let PID = shoe.Products[i].styleId;
        let name = shoe.Products[i].shoe;
        let gender = shoe.Products[i].gender;
        let colorway = shoe.Products[i].colorway;
        let msrp = shoe.Products[i].retailPrice;
        let mV = shoe.Products[i].market.lastSale;
        let img = shoe.Products[i].media.smallImageUrl;
        $("#result").append(`
              <div>
                      <h2>
                      ${year} ${gender} ${brand}: ${name}
                      </h2>
                      <h4>
                        ${PID} - ${formatter.format(msrp)}
                      </h4>
                      <h3> ${colorway}</h3>
                      <h3> Current Value: ${formatter.format(mV)}</h3>
                      <img src="${img}" alt="" />
                    </div>
              `);
      }
    });
  }
});
