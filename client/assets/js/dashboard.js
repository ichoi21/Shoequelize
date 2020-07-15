$(document).ready(function () {
  stockx();

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
                    <button id="addBtn">Add</button>
                  </div>
            `);
      }
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
