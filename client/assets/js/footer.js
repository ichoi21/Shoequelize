$(document).ready(function () {
  $("footer").html(
    `
    <footer class="page-footer pink darken-4">

      <div class="row container">

      <div class="column">
      <h6 id="followus">FOLLOW US</h6>

    <ul id="social" style="list-style-type:none; font-size:27px; display:inline; margin-right:20px">
    <li><i class="fab fa-twitter"></i></li>
    <li><i class="fab fa-facebook"></i></li>
    <li><i class="fab fa-instagram"></i></li>
    <li><i class="fa fa-pinterest-square"></i></li>
    </ul>
    </div>

    <div class="col s12 m3 l4 column"
    <h6>GET HELP</h6>
    <ul id="help" style="list-style-type:none white-text ">
    <li><a href="http://127.0.0.1:5501/client/landing.html">Home</a></li>
    <li><a href="http://127.0.0.1:5501/client/dashboard.html">Login</a></li> 
    <li><a href="http://127.0.0.1:5501/client/help.html">Contact us</a></li>
    </ul>
    </div>

    <div class="col s12 m3 l4 column"
    <h6>ABOUT US</h6>
    <ul id="help" style="list-style-type:none white-text ">
    <li><a href="http://127.0.0.1:5501/client/about.html">About Shoequelize</a></li>
    <li><a href="http://127.0.0.1:5501/client/press.html">Press</a></li> 
    <li><a href="http://127.0.0.1:5501/collection">Our collection</a></li>
    </ul>
    </div>
<br>
<br>
</footer>

  
    <div class="footer-copyright pink lighten-5">
      <div class="row">
        <p class="blue-grey-text dark"> © 2020 Shoequelize, All rights reserved.</p>
      </div>
    </div>
    
  `
  );
});
