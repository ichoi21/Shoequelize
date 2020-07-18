$(document).ready(function () {
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

  $.ajax({
    type: "GET",
    url: "/logs/all",
  }).then((shoes) => {
    console.log(shoes);
    for (let i = 0; i < shoes.length; i++) {
<<<<<<< HEAD
      $("#result").prepend(`
      <div class="col s12 m3">
=======
      $("#collection").append(`
      <div class="col s12 m4 l4">
>>>>>>> 0ab199da4eaff0a2a2efd3ddc94f64b0f2786f2a
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

$(document).ready(function () {
  $("select").formSelect();
});
