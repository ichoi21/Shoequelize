$(document).ready(function () {
  $("footer").html(
    `
    <footer class="page-footer pink darken-4">
    <div class="container">
      <div class="row" style="padding-top:5px;">
        <div class="col s12 m3 l4">
        <h6 id="followus">FOLLOW US</h6>
        <ul id="social" class="nav-wrapper" style="font-size:27px; display:inline; margin-right:20px">
          <a href="https://twitter.com/shoequelize" target="blank"><span class="white-text"><i class="fab fa-twitter"></i></span></a>
          <a href="https://www.facebook.com/Shoequelize-106448554477502/" target="blank"><span class="white-text"><i class="fab fa-facebook"></i></span></a>
          <a href="https://www.instagram.com/shoequelize/" target="blank"><span class="white-text"><i class="fab fa-instagram"></i></span></a>
          <a href="https://www.pinterest.com/search/pins/?q=sneakers&rs=typed&term_meta[]=sneakers%7Ctyped" target="blank"><span class="white-text"><i class="fa fa-pinterest-square"></i></span></a>
        </ul>
        </div>
        <div class="col s12 m3 l4">
          <h6>SITE MAP</h6>
          <ul id="" style="list-style-type:none white-text ">
            <div class="hoverable"><li><a class="btn-flat waves-effect waves-light white-text" id="shoequelize1">Home</a></li></div>
            <div class="hoverable"><li><a class="btn-flat waves-effect waves-light white-text" id="btnContact">Contact Us</a></li></div>
          </ul>
        </div>
        <div class="col s12 m3 l4">
          <h6>ABOUT US</h6>
          <ul id="" style="list-style-type:none white-text ">
            <div class="hoverable"><li><a class="btn-flat waves-effect waves-light white-text" id="btnAbout">About Shoequelize</a></li></div>
            <div class="hoverable"><li><a class="btn-flat waves-effect waves-light white-text" id="btnPress">Developer's Press</a></li></div>
        </ul>
        </div>
      </div>  
    </div> 
    <div class="footer-copyright pink lighten-5">
      <div class="container flex">
      <p class="blue-grey-text dark center-align"> © 2020 Shoequelize, All rights reserved.</p>
      </div>
    </div>
  </footer> 
  <script src="./assets/js/about.js"></script>
  <script src="./assets/js/contact.js"></script>
  <script src="./assets/js/press.js"></script> 
  `
  );
  $("#shoequelize1").on("click", () => (window.location.href = "/dashboard"));
});
