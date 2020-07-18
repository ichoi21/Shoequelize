$(document).ready(function () {
  $("#shoequelize").on("click", () => {
    window.location.href = "/dashboard";
  });

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
      $("#result").append(`
      <div class="col s12 m3">
          <div id="content" class="card-panel center-align">
                          <div class="card-title">
                            ${shoes[i].brand}: ${shoes[i].name} (${
        shoes[i].gender
      })
                          </div>
                          <div class="card-image small"><img src="${
                            shoes[i].timg
                          }" alt="" /></div>
                          <div class="color">${shoes[i].color}</div>
                          <div class="pid">${shoes[i].PID}</div>
                          <div class="year">
                            ${shoes[i].year} | MRSP: ${
        shoes[i].PID
      } - ${formatter.format(shoes[i].msrp)}
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
                              <i class="material-icons left"> add_circle_outline </i>Edit
                            </button>
                            <button
                            id="deleteBtn"
                            data-id="${shoes[i].id}"
                            class="btn waves-effect btn-flt red"
                          >
                            <i class="material-icons left"> add_circle_outline </i>Delete
                          </button>
                          </div>
                        </div>
                      </div>
            `);
    }
  });

  $(document).on("click", "#deleteBtn", function () {
    const shoeId = $(this).attr("data-id");
    $.ajax({
      type: "DELETE",
      url: `/shoe/delete/${shoeId}`,
    }).then(() => console.log({ msg: "Shoe Deleted!" }));
  });
});
