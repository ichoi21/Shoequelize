$(document).ready(function () {
  $("select").formSelect();
  $(".carousel").carousel();
  $(".parallax").parallax();
  $(".sidenav").sidenav();

  $("#shoequelize").on("click", () => {
    window.location.href = "/dashboard";
  });

  const deleteModal = document.getElementById("deleteModal");
  const deleteModalInstance = M.Modal.init(deleteModal, { dismissible: true });

  const editModal = document.getElementById("editModal");
  const editModalInstance = M.Modal.init(editModal, { dismissible: true });

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let collectionWorth = 0;
  let amountSpent = 0;
  let amountShoes = 0;
  let userAlias;

  $.ajax({
    type: "GET",
    url: "/auth/user",
  }).then((res) => (userAlias = res.alias));

  $.ajax({
    type: "GET",
    url: "/shoes/all",
  }).then((shoes) => {
    for (let i = 0; i < shoes.length; i++) {
      collectionWorth += parseInt(shoes[i].market_value);
      amountSpent += parseInt(shoes[i].msrp);
      amountShoes = shoes.length;
      $("#collection").append(`
      <div class="col s12 m4 l4">
          <div id="content" class="card-panel center-align">
                          <div class="card-title" style="font-weight: bold; font-size: large;">
                            ${shoes[i].name} (${shoes[i].gender})
                          </div>
                          <div class="card-image"><img src="${
                            shoes[i].timg
                          }" alt="" width="150"/></div>
                          <div class="color">${shoes[i].color}</div>
                          <div class="pid">${shoes[i].PID}</div>
                          <div class="year">${
                            shoes[i].year
                          } | MRSP: ${formatter.format(shoes[i].msrp)}
                          </div>
                          <div class="mv">Current Value: ${formatter.format(
                            shoes[i].market_value
                          )}</div>
                          <div class=" ">
                            <button
                              id="editBtn"
                              data-id="${i}"
                              class="btn waves-effect btn-flt blue"
                            >
                              <i class="material-icons left"> edit </i>Edit
                            </button>
                            <button
                            id="deleteBtn"
                            data-id="${shoes[i].id}"
                            class="btn waves-effect btn-flt red"
                          >
                            <i class="material-icons left"> delete</i>Delete
                          </button>
                          </div>
                        </div>
                      </div>
            `);
    }

    function sum(input) {
      if (toString.call(input) !== "[object Array]") return false;

      var total = 0;
      for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
          continue;
        }
        total += Number(input[i]);
      }
      return total;
    }
    console.log(
      sum([collectionWorth, -amountSpent]),
      Math.floor((collectionWorth / amountSpent) * 100)
    );
    let delta = sum([collectionWorth, -amountSpent]);
    let deltaPercent = Math.floor((delta / amountSpent) * 100);

    renderCard(shoes);
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

  $(document).on("click", "#cancelDelete", () => {
    deleteModalInstance.close();
    editModalInstance.close();
  });

  $(document).on("click", "#deleteBtn", function () {
    deleteModalInstance.open();
    const shoeId = $(this).attr("data-id");
    delShoes(shoeId).then(() => location.replace("/collection"));
  });

  $(document).on("click", "#editBtn", function () {
    editModalInstance.open();
  });

  $("#searchBar").on("click", "#btnSearch", (e) => {
    e.preventDefault();
    const brand = $("#query").val();
    $.ajax({
      type: "GET",
      url: `/shoes/find/${brand}`,
    }).then((shoes) => {
      console.log(typeof shoes);
      $("#query").val("");
      if (shoes.length !== 0) {
        $("#collection").html("");
        renderCard(shoes);
        showAlert(`${shoes.length} shoes found!`, "green lighten-2");
      } else {
        showAlert("None found!", "red lighten-2");
      }
    });
  });

  showAlert = (str, type) => {
    $("#alert").show();
    $("#alert").attr("class", `m6 s12 card-panel ${type}`);
    $("#alert").text(str);
    window.setTimeout(function () {
      $("#alert").hide();
    }, 2000);
  };

  renderCard = (shoes) => {
    for (let i = 0; i < shoes.length; i++) {
      collectionWorth += parseInt(shoes[i].market_value);
      amountSpent += parseInt(shoes[i].msrp);
      amountShoes = shoes.length;
      $("#collection").append(`
        <div class="col s12 m4 l4">
            <div id="content" class="card-panel center-align">
                            <div class="card-title" style="font-weight: bold; font-size: large;">
                              ${shoes[i].name} (${shoes[i].gender})
                            </div>
                            <div class="card-image"><img src="${
                              shoes[i].timg
                            }" alt="" width="150"/></div>
                            <div class="color">${shoes[i].color}</div>
                            <div class="pid">${shoes[i].PID}</div>
                            <div class="year">${
                              shoes[i].year
                            } | MRSP: ${formatter.format(shoes[i].msrp)}
                            </div>
                            <div class="mv">Current Value: ${formatter.format(
                              shoes[i].market_value
                            )}</div>
                            <div class=" ">
                              <button
                                id="editBtn"
                                data-id="${i}"
                                class="btn waves-effect btn-flt blue"
                              >
                                <i class="material-icons left"> edit </i>Edit
                              </button>
                              <button
                              id="deleteBtn"
                              data-id="${shoes[i].id}"
                              class="btn waves-effect btn-flt red"
                            >
                              <i class="material-icons left"> delete</i>Delete
                            </button>
                            </div>
                          </div>
                        </div>
              `);
    }
  };

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
