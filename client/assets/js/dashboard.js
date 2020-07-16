$(document).ready(function () {
  stockx();
  addShoe();

  let resultContainer = [];

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
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

          // let year = shoe.Products[i].year;
          // let brand = shoe.Products[i].brand;
          // let PID = shoe.Products[i].styleId;
          // let name = shoe.Products[i].shoe;
          // let gender = shoe.Products[i].gender;
          // let colorway = shoe.Products[i].colorway;
          // let msrp = shoe.Products[i].retailPrice;
          // let mV = shoe.Products[i].market.lastSale;
          // let img = shoe.Products[i].media.smallImageUrl;
          $("#result").append(`
                      <div class="col s12 m4">
                        <div id="content" class="card small center-align">
                          <div class="card-title">
                            ${data.brand}: ${data.name} (${data.gender})
                          </div>
                          <div class="card-image small"><img src="${
                            data.timg
                          }" alt="" /></div>
                          <div class="color">${data.colorway}</div>
                          <div class="pid">${data.PID}</div>
                          <div class="year">
                            ${data.year} | MRSP: ${
            data.PID
          } - ${formatter.format(data.msrp)}
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
  function addShoe() {
    $(document).on("click", "#addBtn", function () {
      console.log(resultContainer[$(this).attr("data-id")]);
    });
  }
});

// const createLog = () => {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       type: "GET",
//       url: "/logs/new",
//       data: {
//         company: $("#companyInput").val().trim(),
//         roast: $("#roastInput").val().trim(),
//         name: $("#nameInput").val().trim(),
//         description: $("#descriptionInput").val().trim(),
//       },
//     }).then(() => {
//       $("#companyInput").val("");
//       $("#roastInput").val("");
//       $("#nameInput").val("");
//       $("#descriptionInput").val("");
//       logInstance.close();
//       resolve("success");
//     });
//   });
// };

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

// $(".parallax").parallax();
// $(".sidenav").sidenav();

// const logModal = document.getElementById("newLogModal");
// const logInstance = M.Modal.init(logModal, { dismissible: true });

// renderLogs();

// $("#newLogBtn").on("click", () => logInstance.open());
// $("#logCancel").on("click", () => logInstance.close());

// $("#logForm").on("submit", (e) => {
//   e.preventDefault();
//   createLog().then(() => renderLogs());
// });
