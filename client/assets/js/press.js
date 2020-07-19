//This is the about developer's press appended into the mainBody id when clicked on

$(document).on("click", "#btnPress", function (e) {
  e.preventDefault();
  $("#mainBody").html(
    `
  <div class="padding white-text blue-grey darken-4">
    <div class="container">
      <div class="row">
        <h4>Developer's Press</h4>
      </div>
      <div class="row">
        <table>

        </table>
      </div>
    </div> 
  </div>
  `
  );
});
