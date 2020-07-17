$(document).ready(function () {
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
      gender: resultContainer[index].gender,
      color: resultContainer[index].colorway,
      msrp: resultContainer[index].msrp,
      image: resultContainer[index].img,
      market_value: resultContainer[index].mV,
      timg: resultContainer[index].timg,
    };
    showAlert("Shoes saved to Collection!", "teal lighten-2");
    addShoe(newShoes).then(() => console.log(resultContainer[index].year));
  });

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

  const stockXSearch = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: `https://stockx.com/api/browse?&_search=${query}&year=${shoeYr}&brand=${shoeBrand}&gender=${shoeGdr}`,
        dataType: "json",
      }).then(function (shoe) {
        $("#result").html("");
        $("#query").val("");
        $("#shoeBrand").val("");
        $("#shoeYr").val("");
        $("#shoeGdr").val("");
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
          };
          resultContainer.push(data);
          $("#result").append(`
          <div class="col s12 m3">
          <div id="content" class="card-panel center-align">
                          <div class="card-title">
                            ${data.brand}: ${data.name} (${data.gender})
                          </div>
                          <div class="card-image small"><img src="${
                            data.timg
                          }" alt="" /></div>
                          <div class="color">${data.colorway}</div>
                          <div class="pid">${data.PID}</div>
                          <div class="year">
                            ${data.year} | MRSP: ${formatter.format(data.msrp)}
                          </div>
                          <div class="mv">Current Value: ${formatter.format(
                            data.mV
                          )}</div>
                          <div class=" ">
                            <button
                              id="addBtn"
                              data-id="${i}"
                              class="btn waves-effect btn-flt green"
                            >
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
  function showAlert(str, type) {
    $("#alert").show();
    $("#alert").attr("class", `m6 s12 card-panel ${type}`);
    $("#alert").text(str);
    window.setTimeout(function () {
      $("#alert").hide();
    }, 2000);
  }
});

// const renderLogs = () => {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       type: "GET",
//       url: "/logs/user",
//     }).then((logs) => {
//       $("#logsContainer").empty();
//       logs.forEach((log) => {
//         let { name, company, roast, description } = log;
//         if (name) {
//           name = `<p>${name}</p>`;
//         } else {
//           name = "";
//         }
//         $("#logsContainer").append(`
//         <div class="row">
//           <div class="card brown darken-1">
//             <div class="card-content white-text">
//               ${name}
//               <span class="card-title">${company}</span>
//               <br>
//               <p>${roast}</p>
//               <p>${description}</p>
//             </div>
//           </div>
//         </div>
//         `);

//         resolve("success");
//       });
//     });
//   });
// };
