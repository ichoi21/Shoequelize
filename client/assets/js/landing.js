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
