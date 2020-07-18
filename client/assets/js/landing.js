$(document).ready(function () {
  $(".parallax").parallax();
  $(".sidenav").sidenav();

  const loginModal = document.getElementById("loginModal");
  const loginModalInstance = M.Modal.init(loginModal, { dismissible: true });

  const registerModal = document.getElementById("registerModal");
  const registerModalInstance = M.Modal.init(registerModal, {
    dismissible: true,
  });

  $("#loginForm").on("submit", function (e) {
    e.preventDefault();
    const newUser = {
      email: $("#loginEmail").val().trim(),
      password: $("#loginPassword").val().trim(),
    };
    loginUser(newUser).then(() => window.location.replace("/dashboard"));
  });

  $("#registerForm").on("submit", function (e) {
    e.preventDefault();
    const newUser = {
      email: $("#registerEmail").val().trim(),
      password: $("#registerPassword").val().trim(),
    };
    registerUser(newUser).then(() => location.replace("/"));
  });

  $(".signupBtn").on("click", function () {
    registerModalInstance.open();
  });

  $(".loginBtn").on("click", function () {
    loginModalInstance.open();
  });

  $("#loginCancel").on("click", function () {
    loginModalInstance.close();
  });

  $("#registerCancel").on("click", function () {
    registerModalInstance.close();
  });

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
      $("#result_th").append(
        `
        <tr>
        <th>Name</th>
        <th>Year</th>
        <th>Colorway</th>
        <th>MSRP</th>
        <th>Market Value</th>
      </tr>
            `
      );
      for (let i = 0; i < 5; i++) {
        let year = shoe.Products[i].year;
        let brand = shoe.Products[i].brand;
        let PID = shoe.Products[i].styleId;
        let name = shoe.Products[i].shoe;
        let gender = shoe.Products[i].gender;
        let colorway = shoe.Products[i].colorway;
        let msrp = shoe.Products[i].retailPrice;
        let mV = shoe.Products[i].market.lastSale;
        let timg = shoe.Products[i].media.thumbUrl;
        $("#result").append(
          `
          <tr>
          <td>
            <img src="${timg}" alt="" width="100" height="80" />
          </td>
          <td>
           ${name} <br>
           ${PID} | ${gender}
          </td>
          <td>${year}</td>
          <td>${colorway}</td>
          <td>${formatter.format(msrp)}</td>
          <td>${formatter.format(mV)}</td>
        </tr>

              `
        );
      }
    });
  }
});

{
  /* <div class="col s12 m8 l8">
<div id="content" class=" center-align">
                <div class="card-title">
                  ${name} (${gender})
                </div>
                <div class="card-image small"><img src="${timg}" alt="" width="100" height="80"/></div>
                <div class="color">${colorway}</div>
                <div class="pid">${PID}</div>
                <div class="year">
                  ${year} | MRSP: ${formatter.format(msrp)}
                </div>
                <div class="mv">Current Value: ${formatter.format(
                  mV
                )}</div>
              </div>
            </div> */
}

const loginUser = (userObj) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "/auth/login",
      data: userObj,
    }).then(
      (res) => resolve({ msg: "success" }),
      (err) => reject(err)
    );
  });
};

const registerUser = (userObj) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "/auth/register",
      data: userObj,
    }).then(
      (res) => resolve(res),
      (err) => reject(err)
    );
  });
};

$(document).ready(function () {
  $(".carousel").carousel();
});

$(document).ready(function () {
  $("select").formSelect();
});
