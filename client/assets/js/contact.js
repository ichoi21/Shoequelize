//This is the about developer's press appended into the mainBody id when clicked on

$(document).on("click", "#btnContact", function (e) {
  e.preventDefault();
  $("#mainBody").html(
    `
  <div class="padding white-text blue-grey darken-4">
    <div class="container">
      <div class="row">
        <h4>Contact Us</h4>
      </div>
        <div class="row" id="shoeCall">
          <div class="col s12 m10 l8"></div>
        </div>
        <div class="row" id="developers">
          <div class="col s12 m3 l3"></div>
        </div>
    </div> 

  </div>
  `
  );
});
