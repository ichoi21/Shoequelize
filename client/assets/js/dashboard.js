$(document).ready(function () {
  $("select").formSelect();
  stockx();

  let resultContainer = [];

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  $("#shoeCollection").on("click", () => {
    window.location.href = "/collection";
  });

  $(document).on("click", "#addBtn", function (e) {
    e.preventDefault();
    const index = $(this).attr("data-id");

    const newShoes = {
      year: resultContainer[index].year,
      brand: resultContainer[index].brand,
      PID: resultContainer[index].PID,
      name: resultContainer[index].name,
      gender: resultContainer[index].gender,
      color: resultContainer[index].colorway,
      msrp: resultContainer[index].msrp,
      image: resultContainer[index].img,
      market_value: resultContainer[index].mV,
      timg: resultContainer[index].timg,
      comment: resultContainer[index].comment,
    };
    console.log(newShoes);
    showAlert("Shoes saved to Collection!", "teal lighten-2");
    addShoe(newShoes).then(() => console.log({ msg: "shoe added!" }));
  });

  function stockx() {
    $("#btnSearch").on("click", function (e) {
      e.preventDefault();
      query = $("#query").val();
      shoeBrand = $("#shoeBrand").val();
      shoeYr = $("#shoeYr").val();
      shoeGdr = $("#shoeGdr").val();
      console.log(shoeBrand, shoeYr, query, shoeGdr);
      query === "" || shoeBrand === "" || shoeYr === "" || shoeGdr === ""
        ? emptyField(showAlert("ERROR: Input cannot be NULL!", "red lighten-2"))
        : stockXSearch();
    });
  }

  const stockXSearch = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: `https://stockx.com/api/browse?&_search=${query}&year=${shoeYr}&brand=${shoeBrand}&gender=${shoeGdr}`,
        dataType: "json",
      }).then(function (shoe) {
        emptyField();
        resultContainer = [];
        for (let i = 0; i < 5; i++) {
          const data = {
            year: shoe.Products[i].year,
            brand: shoe.Products[i].brand,
            PID: shoe.Products[i].styleId,
            name: shoe.Products[i].shoe,
            gender: shoe.Products[i].gender,
            colorway: shoe.Products[i].colorway,
            msrp: shoe.Products[i].retailPrice,
            mV: shoe.Products[i].market.lastSale,
            img: shoe.Products[i].media.smallImageUrl,
            timg: shoe.Products[i].media.thumbUrl,
            comment: "",
          };
          resultContainer.push(data);
          $("#result").append(`
            <div class="col s12 m4 l4">
              <div id="content" class="card large center-align">
                <div class="card-title" style="font-weight: bold; font-size: large;">
                  ${data.name} (${data.gender})
                </div>
                <div class="card-image small">
                  <img src="${data.timg}" alt="" width="180"/>
                </div>
                <div class="color">${data.colorway}</div>
                <div class="pid">${data.PID}</div>
                <div class="year">
                  ${data.year} | MRSP: ${formatter.format(data.msrp)}
                </div>
                <div class="mv">Current Value: ${formatter.format(
                  data.mV
                )}</div>
                <br>
                <div class="comment">${data.comment}</div>
                <div class=" ">
                  <button id="addBtn" data-id="${i}" class="btn waves-effect btn-flt green">
                    <i class="material-icons left"> add_circle_outline </i>Add
                  </button>
                </div>
              </div>
            </div>
              `);
          resolve("Search: Results shown!");
        }
      });
    });
  };

  const addShoe = (shoeObj) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "POST",
        url: "/shoe/new",
        data: shoeObj,
      }).then(
        (res) => resolve(res),
        (err) => reject(err)
      );
    });
  };
  showAlert = (str, type) => {
    $("#alert").show();
    $("#alert").attr("class", `m6 s12 card-panel ${type}`);
    $("#alert").text(str);
    window.setTimeout(function () {
      $("#alert").hide();
    }, 2000);
  };
  emptyField = (func) => {
    $("#result").html("");
    $("#query").val("");
    $("#shoeBrand").val("");
    $("#shoeYr").val("");
    $("#shoeGdr").val("");
    func;
  };
});
