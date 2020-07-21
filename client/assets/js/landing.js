$(document).ready(function () {
  $(".carousel").carousel();
  $(".parallax").parallax();

  const loginModal = document.getElementById("loginModal");
  const loginModalInstance = M.Modal.init(loginModal, { dismissible: true });

  const registerModal = document.getElementById("registerModal");
  const registerModalInstance = M.Modal.init(registerModal, {
    dismissible: true,
  });

  $(document).on("submit", "#loginForm", function (e) {
    e.preventDefault();
    const newUser = {
      email: $("#loginEmail").val().trim(),
      password: $("#loginPassword").val().trim(),
    };
    loginUser(newUser).then(() => window.location.replace("/dashboard"));
  });

  $(document).on("submit", "#registerForm", function (e) {
    e.preventDefault();
    const newUser = {
      alias: $("#registerAlias").val().trim(),
      email: $("#registerEmail").val().trim(),
      password: $("#registerPassword").val().trim(),
      shoeSize: $("#registerSize").val().trim(),
    };
    console.log(newUser.alias + newUser.shoeSize);

    registerUser(newUser).then(() => location.replace("/"));
  });

  $(document).on("click", ".signupBtn", function () {
    registerModalInstance.open();
  });

  $(document).on("click", ".loginBtn", function () {
    loginModalInstance.open();
  });

  $(document).on("click", "#loginCancel", function () {
    loginModalInstance.close();
  });

  $(document).on("click", "#registerCancel", function () {
    registerModalInstance.close();
  });

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  stockx();

  function stockx() {
    $(document).on("click", "#btnSearch", function (e) {
      e.preventDefault();
      console.log("hello");
      $("#result_th").html("");
      query = $("#query").val();
      shoeBrand = $("#shoeBrand").val();
      shoeYr = $("#shoeYr").val();
      shoeGdr = $("#shoeGdr").val();
      query === "" || shoeBrand === "" || shoeYr === "" || shoeGdr === ""
        ? emptyField(showAlert("ERROR: Input cannot be NULL!", "red lighten-2"))
        : emptyField(stockXSearch());
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
        <th>&nbsp;&nbsp;</th>
        <th>Year</th>
        <th>Colorway</th>
        <th>MSRP</th>
        <th>Market Value</th>
      </tr>
            `
      );
      for (let i = 0; i < shoe.Products.length; i++) {
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
