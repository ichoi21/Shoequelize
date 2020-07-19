$(document).ready(function () {
  $("select").formSelect();
  $(".carousel").carousel();
  $(".parallax").parallax();
  $(".sidenav").sidenav();
  $(".fixed-action-btn").floatingActionButton({ direction: `left` });

  //Initiate functions:

  // button to go back to dashboard page
  $("#shoequelize").on("click", () => {
    window.location.href = "/dashboard";
  });

  //opens delete modal
  const deleteModal = document.getElementById("deleteModal");
  const deleteModalInstance = M.Modal.init(deleteModal, { dismissible: true });

  //opens edit modal
  const editModal = document.getElementById("editModal");
  const editModalInstance = M.Modal.init(editModal, { dismissible: true });

  //converts number to $0.00 format
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  //variable for collection summary
  let collectionWorth = 0;
  let amountSpent = 0;
  let amountShoes = 0;
  let userAlias;

  // displays alias in the page
  $.ajax({
    type: "GET",
    url: "/auth/user",
  }).then((res) => (userAlias = res.alias));

  //displays all shoes collected in database
  $.ajax({
    type: "GET",
    url: "/shoes/all",
  }).then((shoes) => {
    renderCard(shoes);

    const sum = (input) => {
      if (toString.call(input) !== "[object Array]") return false;

      var total = 0;
      for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
          continue;
        }
        total += Number(input[i]);
      }
      return total;
    };

    let delta = sum([collectionWorth, -amountSpent]);
    let deltaPercent = Math.floor((delta / amountSpent) * 100);

    $("#collectionInfo").append(`
          <div class="col s12 m12 l12">
            <h3 class="header" style="font-weight: bold;">Hey there, ${userAlias}!</h3>
            <div class="card horizontal">
              <div class="card-stacked">
                <div class="card-content">
                  <h5>No. of shoes collected: ${amountShoes} pairs</h5>
                  <h5>Current Market Value: ${formatter.format(
                    JSON.stringify(collectionWorth)
                  )} USD</h5>
                  <h5>Est. Spent Value: ${formatter.format(
                    JSON.stringify(amountSpent * 1.085)
                  )} USD</h5>
                </div>
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <h4>That's a ${formatter.format(
                    JSON.stringify(delta)
                  )} USD difference.</h4>
                  <h5> ~${deltaPercent}% Change</h5>
                </div>
              </div>
            </div>
          </div>
          `);
  });

  let viewStatus = true;
  $(document).on("click", "#listView", () => {
    viewStatus = false;
    $("#collection").html("");
    $.ajax({
      type: "GET",
      url: "/shoes/all",
    }).then((shoes) => {
      renderList(shoes);
      console.log(viewStatus);
    });
  });

  $(document).on("click", "#gridView", () => {
    viewStatus = true;
    $("#collection").html("");
    $.ajax({
      type: "GET",
      url: "/shoes/all",
    }).then((shoes) => {
      renderCard(shoes);
      console.log(viewStatus);
    });
  });

  // controls cancel button in each modal
  $(document).on("click", "#cancelDelete", () => {
    deleteModalInstance.close();
    editModalInstance.close();
  });

  // opens delete modal
  $(document).on("click", "#deleteBtn", function () {
    deleteModalInstance.open();
    const shoeId = $(this).attr("data-id");
    delShoes(shoeId).then(() => location.replace("/collection"));
  });

  // opens edit modal
  $(document).on("click", "#editBtn", function () {
    editModalInstance.open();
  });

  // search function to search by shoe brand
  $("#searchBar").on("click", "#btnSearch", (e) => {
    e.preventDefault();
    const brand = $("#query").val();
    $.ajax({
      type: "GET",
      url: `/shoes/find/${brand}`,
    }).then((shoes) => {
      $("#query").val("");
      if (shoes.length !== 0) {
        $("#collection").html("");
        if (viewStatus == false) {
          renderList(shoes);
          showAlert(`${shoes.length} shoes found!`, "green lighten-2");
        } else {
          renderCard(shoes);
          showAlert(`${shoes.length} shoes found!`, "green lighten-2");
        }
      } else {
        showAlert("None found!", "red lighten-2");
      }
    });
  });

  // alert function
  showAlert = (str, type) => {
    $("#alert").show();
    $("#alert").attr("class", `m6 s12 card-panel ${type}`);
    $("#alert").text(str);
    window.setTimeout(function () {
      $("#alert").hide();
    }, 2000);
  };

  // renders cards and collects info about collection summary
  renderCard = (shoes) => {
    for (let i = 0; i < shoes.length; i++) {
      collectionWorth += parseInt(shoes[i].market_value);
      amountSpent += parseInt(shoes[i].msrp);
      amountShoes = shoes.length;
      $("#collection").append(`
      <div class="col s12 m4 l4">
      <div id="content" class="card small center-align">
        <div class="card-image waves-effect waves-block waves-light">
          <img
            class="activator"
            src="${shoes[i].timg}"
            alt=""
            width="150"
          />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4"
            >${shoes[i].name}<i class="material-icons right"
              >more_vert</i
            ></span
          >
          <p>more info --></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4"
            >${shoes[i].name}
            <i class="material-icons right grey-text">close</i></span
          >
          <div class="gender">(${shoes[i].gender})</div>
          <div class="color">${shoes[i].color}</div>
          <div class="pid">${shoes[i].PID}</div>
          <div class="year">${shoes[i].year}</div>
            <div class="msrp">
              MRSP: ${formatter.format(shoes[i].msrp)}
            </div>
            <div class="mv">
              Current Value: ${formatter.format(shoes[i].market_value)}
            </div>
            <div class="fixed-action-btn">
              <a class="btn-floating btn-large red">
                <i class="large material-icons">mode_edit</i>
              </a>
              <ul>
                <li>
                  <a class="btn-floating red"
                    ><i class="large material-icons">delete_circle</i></a
                  >
                </li>
                <li>
                  <a class="btn-floating blue"
                    ><i class="large material-icons">add_comment</i></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      `);
    }
  };

  // appends listView function
  renderList = (shoes) => {
    $("#collection").append(
      `
        <tr>
        <th>Name</th>
        <th>&nbsp;&nbsp;</th>
        <th>Year</th>
        <th>Colorway</th>
        <th>MSRP</th>
        <th>Market Value</th>
      </tr>`
    );
    for (let i = 0; i < shoes.length; i++) {
      collectionWorth += parseInt(shoes[i].market_value);
      amountSpent += parseInt(shoes[i].msrp);
      amountShoes = shoes.length;
      $("#collection").append(
        `
        <tr>
        <td>
          <img src="${shoes[i].timg}" alt="" width="100" height="80" />
        </td>
        <td>
        ${shoes[i].name} <br>
        ${shoes[i].PID} | ${shoes[i].gender}
        </td>
        <td>${shoes[i].year}</td>
        <td>${shoes[i].color}</td>
        <td>${formatter.format(shoes[i].msrp)}</td>
        <td>${formatter.format(shoes[i].market_value)}</td>
      </tr>`
      );
    }
  };

  // delete shoes function
  const delShoes = (id) => {
    return new Promise((resolve, reject) => {
      $(document).on("click", "#delBtn", function () {
        $.ajax({
          type: "DELETE",
          url: `/shoe/delete/${id}`,
        }).then(() => resolve({ msg: "Shoe Deleted!" }));
      });
    });
  };
});
