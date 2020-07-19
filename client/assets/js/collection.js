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
    renderCard(shoes);
    $("#collectionInfo").append(`
    <div class="col s12 m12">
    <h2 class="header">Hello ${userAlias}!</h2>
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <h5>Number of shoes collected: ${amountShoes}</h5>
          <h5>Collection Worth: ${formatter.format(
            JSON.stringify(collectionWorth)
          )}</h5>
          <h5>Amount Spent: ${formatter.format(
            JSON.stringify(amountSpent * 1.085)
          )}</h5>
        </div>
      </div>
    </div>
  </div>`);
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
