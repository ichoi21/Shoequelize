$(document).ready(function () {
  stockx();

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
<<<<<<< HEAD

  $(document).on("click", "#addBtn", async function (e) {
    e.preventDefault();
    const index = $(this).attr("data-id");
    console.log(resultContainer[1].year);

    const newShoes = {
      // year: 2019,
      // brand: "adidas",
      // PID: "BB0394",
      // style: "Citrin/Citrin",
      // gender: "men",
      // color: "Citrin",
      // msrp: 220,
      // image: "google.com",
      // market_value: 325,
      year: resultContainer[index].year,
      brand: resultContainer[index].brand,
      PID: resultContainer[index].PID,
      style: resultContainer[index].style,
      gender: resultContainer[index].$gender,
      color: resultContainer[index].color,
      msrp: resultContainer[index].msrp,
      image: resultContainer[index].image,
      market_value: resultContainer[index].market_value,
      // };
    };
    await addShoe(newShoes).then(() => console.log(index));
  });

  // const saveShoe = () => {
  //   return new Promise((resolve, reject) => {
  //     $(document).on("click", "#addBtn", function (e) {
  //       e.preventDefault();
  //       obj = resultContainer[index];
  //       resolve({ msg: "success" });
  //     });
  //   });
  // };

  const stockXSearch = () => {
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
        };
        resultContainer.push(data);
        $("#result").append(`
              <div id="content">
                      <h2>
                      ${data.year} ${data.gender} ${data.brand}: ${data.name}
                      </h2>
                      <h4>
                        ${data.PID} - ${formatter.format(data.msrp)}
                      </h4>
                      <h3> ${data.colorway}</h3>
                      <h3> Current Value: ${formatter.format(data.mV)}</h3>
                      <img src="${data.img}" alt="" />
                      <button id="addBtn" data-id=${i}>Add</button>
                    </div>
              `);
      }
=======
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
>>>>>>> 22210b343530a685e34ecb4bd83e18d5ddba33da
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
