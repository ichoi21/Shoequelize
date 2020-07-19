//This is the about developer's press appended into the mainBody id when clicked on

$(document).on("click", "#btnContact", function (e) {
  e.preventDefault();
  $("#mainBody").html(
    `
  <div class="padding white-text blue-grey darken-2">
    <div class="container">
      <div class="row">
        <h4>Contact Us</h4>
      </div>
        <div class="row" id="shoeCall">
          <div class="col s12 m6 l6">
            <div class="card-small grey z-depth-5" style="height: 300px; padding: 52px;">
            <span style="font-size: 20px;"> We're continuously looking to improve this site and giving you the best collection data!
            <br>
            If you have any suggestions, questions regarding our database and/or API - reach out to us!
            <br>
            <span style:"right-align;">- Shoequelize Team</span></span>
            </div>
          </div>
          <div class="col s12 m6 l6">
            <ul id="social" class="nav-wrapper" style="font-size:36px; display:inline; margin-right:20px">
              <li><a href = "mailto: shoequelize3@gmail.com?subject = Feedback&body = Message"><span class="material-icons white-text" style="font-size:36px">email</span></a></li>
              <li><a href="https://twitter.com/shoequelize" target="blank"><span class="white-text"><i class="fab fa-twitter"></i></span></a></li>
              <li><a href="https://www.facebook.com/Shoequelize-106448554477502/" target="blank"><span class="white-text"><i class="fab fa-facebook"></i></span></a></li>
              <li><a href="https://www.instagram.com/shoequelize/" target="blank"><span class="white-text"><i class="fab fa-instagram"></i></span></a></li>
              <li><a href="https://www.pinterest.com/search/pins/?q=sneakers&rs=typed&term_meta[]=sneakers%7Ctyped" target="blank"><span class="white-text"><i class="fa fa-pinterest-square"></i></span></a></li>
            </ul>
          </div>
        </div>
        <div class="row" id="developers">
          <div class="col s12 m3 l3">
            <div class="card grey z-depth-4">
              <div class="card-image">
                <img class="circle responsive-img" src="https://media-exp1.licdn.com/dms/image/C5603AQEZ3AN_9hy-tQ/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=SoBpWbsvyl4MpZklAC_Jr_pNrvM4URW9Kflfy-ArLDI">
                <span class="card-title">Shakila Marando</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light yellow"><i class="material-icons">star</i></a>
              </div>
              <div class="card-action">
                <a href="https://github.com/shakymary"><span class="white-text" style="font-size: 48px;"><i class="fab fa-github"></i></span></a>
                <a href="https://www.linkedin.com/in/shakila-marando-33432515/"><span class="white-text" style="font-size: 48px;"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div class="col s12 m3 l3">
          <div class="card grey z-depth-4">
            <div class="card-image">
              <img class="circle responsive-img" src="https://media-exp1.licdn.com/dms/image/C4E03AQHSoTcNeMPGIw/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=10U2xPWlfA1Ug2Xf7Q7t6NRERKxQbpvGKdv2JhBaCFc">
              <span class="card-title">Jessica Menius</span>
              <a class="btn-floating halfway-fab waves-effect waves-light yellow"><i class="material-icons">star</i></a>
            </div>
            <div class="card-action">
              <a href="https://https://github.com/jessicamenius"><span class="white-text" style="font-size: 48px;"><i class="fab fa-github"></i></span></a>
              <a href="https://www.linkedin.com/in/jessicamenius/"><span class="white-text" style="font-size: 48px;"><i class="fab fa-linkedin-in"></i></span></a>
            </div>
          </div>
        </div>
        <div class="col s12 m3 l3">
        <div class="card grey z-depth-4">
          <div class="card-image">
            <img class="circle responsive-img" src="https://media-exp1.licdn.com/dms/image/C5603AQFBIpYHw6_mcQ/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=6d7ibZCvgiMgSLDHKGdjZAH_v72YWy9fkMjCGqfcn48">
            <span class="card-title">Myhkas Nallas</span>
            <a class="btn-floating halfway-fab waves-effect waves-light yellow"><i class="material-icons">star</i></a>
          </div>
          <div class="card-action">
            <a href="https://github.com/mnallas"></a><span class="white-text" style="font-size: 48px;"><i class="fab fa-github"></i></span></a>
            <a href="https://www.linkedin.com/in/myhkas-nallas-15980416a/"><span class="white-text" style="font-size: 48px;"><i class="fab fa-linkedin-in"></span></i></a>
          </div>
        </div>
      </div>
      <div class="col s12 m3 l3">
      <div class="card grey z-depth-4">
        <div class="card-image">
          <img class="circle responsive-img" src="https://media-exp1.licdn.com/dms/image/C5603AQFTtfiN182r8g/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=SS5TH4zOCRnUWegtaJwD7hdcS711pkKeCEMqrbtvRHY">
          <span class="card-title">Ian Choi</span>
          <a class="btn-floating halfway-fab waves-effect waves-light yellow"><i class="material-icons">star</i></a>
        </div>
        <div class="card-action">
          <a href="https://github.com/ichoi21"><span class="white-text" style="font-size: 48px;"><i class="fab fa-github"></i></span></a>
          <a href="https://www.linkedin.com/in/ihchoi/"><span class="white-text" style="font-size: 48px;"><i class="fab fa-linkedin-in"></i></span></a>
        </div>
      </div>
    </div>
        </div>
    </div> 
  </div>
  `
  );
});
