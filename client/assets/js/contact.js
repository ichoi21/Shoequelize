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
          <div class="col s12 m3 l3">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg">
                <span class="card-title">Shakila Marando</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-action"">
                <a href="https://github.com/shakymary"><span class="white-text"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/shakila-marando-33432515/"><span class="white-text"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div class="col s12 m3 l3">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg">
              <span class="card-title">Jessica Menius</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-action"">
              <a href="https://github.com/shakymary"><span class="white-text"><i class="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/shakila-marando-33432515/"><span class="white-text"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div class="col s12 m3 l3">
        <div class="card">
          <div class="card-image">
            <img src="images/sample-1.jpg">
            <span class="card-title">Myhkas Nallas</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
          <div class="card-action"">
            <a href="https://github.com/shakymary"><span class="white-text"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/shakila-marando-33432515/"><span class="white-text"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div class="col s12 m3 l3">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg">
          <span class="card-title">Ian Choi</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-action"">
          <a href="https://github.com/shakymary"><span class="white-text"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/shakila-marando-33432515/"><span class="white-text"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
        </div>
    </div> 
  </div>
  `
  );
});
