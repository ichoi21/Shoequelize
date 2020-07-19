//This is the about content appended into the mainBody id when clicked on

$(document).on("click", "#btnAbout", function (e) {
  e.preventDefault();
  $("#mainBody").html(
    `
  <div class="padding white-text blue-grey darken-2">
    <div class="container">
      <div class="card z-depth-3 transparent white-text" style="padding: 20px;">
        <div class="row">
          <h4>About Shoequelize</h4>
        </div>
        <p class="flow-text">Calling all Shoenatics to unite! Ever wonder what you're collection of swooshes and Yeezys are worth?</p>
        <p class="flow-text"> We've got your solution! Here at Shoequelize; our goal is help you gather your collection's worth!
          Simply search our database<sup>*</sup> and add them to your registered shoe collection (signing up is FREE!). 
        <br>
          After that, let's us due to the math for you! 
        <br>
          It's that easy. We're Shoenatics ourselves, so we're just trying to provide you with what we believe would turn your collection to the next level!
        </p>
        <br>
        If you have any suggestions, questions regarding our database and/or API - <a href = "mailto: shoequelize3@gmail.com?subject = Feedback&body = Message">reach out to us</a>!
        <br>
        <sup>*</sup> Search database is stockX's. We don't take credit to any images and market values. 
        <br>
        DISCLAIMER: This is a BCS Full Stack program project where we are demonstrating our project. 
        <br>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
      </div> 
    </div> 
  </div>
  `
  );
});
