// THIS NEEDS TO BE CONVERTED TO AJAX INSTEAD FOR TO GET SHOES FROM STOCKX API

// $(document).ready(function () {
//   $("#btnSearch").on("click", function (e) {
//     const axios = require("axios");
//     //     e.preventDefault();
//     //     const axios = require("axios");
//     //     shoeGdr);
//     console.log("Hello");
//   });
//   //   function stockXSearch(query, shoeBrand, shoeYr, shoeGdr) {
//   //         // $("#result").html(`
//   //         // <div class="container">
//   //         //   <div class="row">
//   //         //     <div class="col-sm-8 text-center">
//   //         //       <div class="card shadow">
//   //         //         <h2>
//   //         //         ${year} ${gender} ${brand}: ${name}
//   //         //         </h2>
//   //         //         <h4>
//   //         //           ${PID} - ${formatter.format(msrp)}
//   //         //         </h4>
//   //         //         <h3> ${colorway}</h3>
//   //         //         <h3> Current Value: ${formatter.format(mV)}</h3>
//   //         //         <img src="${img}" alt="" />
//   //         //       </div>
//   //         //     </div>
//   //         //   </div>
//   //         // </div>
//   //         // `);
//   //       });
//   //   }
// });
// const axios = require("axios");
// const query = "yeezy";
// const shoeBrand = "adidas";
// const shoeYr = "2019";
// const shoeGdr = "men";

// axios
//   .get(
//     `https://stockx.com/api/browse?_search=${query}&year=${shoeYr}&brand=${shoeBrand}&gender=${shoeGdr}`,
//     {
//       headers: { "User-Agent": "Chrome/83.0.4103.116" },
//     }
//   )
//   .then((res) => {
//     for (let i = 0; i < 5; i++) {
//       console.log(
//         res.data.Products[i].year +
//           "\n" +
//           res.data.Products[i].brand +
//           "\n" +
//           res.data.Products[i].styleId +
//           "\n" +
//           res.data.Products[i].shoe +
//           "\n" +
//           res.data.Products[i].gender +
//           "\n" +
//           res.data.Products[i].colorway +
//           "\n" +
//           res.data.Products[i].retailPrice +
//           "\n" +
//           res.data.Products[i].market.lastSale +
//           "\n" +
//           res.data.Products[i].media.smallImageUrl +
//           "\n"
//       );
//     }
//   });
