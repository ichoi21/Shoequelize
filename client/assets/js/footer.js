$(document).ready(function () {
  $("footer").html(
    `
    <footer class="page-footer pink darken-4">

    <div class="row">
      <div class="col s12 offset-m1 m3 offset-l1 l3">
        <span id="followus">FOLLOW US</span><span></span>
        <span id="followus"><a class="blue-grey-text text-lighten-1" href="#!">
        <span style="font-size: 36px; color: White;">
        <i class="fab fa-twitter"></i></span></a></span>

        <span id="followus"><a class="blue-grey-text text-lighten-1" href="#!">
        <span span style="font-size: 36px; color: White;">
        <i class="fab fa-facebook"></i></span></a></span>

        <span id="followus"><a class="blue-grey-text text-lighten-1" href="#!">
        <span style="font-size: 36px; color: White;">
        <i class="fab fa-instagram"></i></span></a></span>
      </div>
      <div class="col s12 m3 l4">
        <h6 class="white-text">ABOUT US</h6>
        <p class="white-text text-lighten-1">About Shoequelize</p> 
        <p class="white-text text-lighten-1">Press</p>         
        <p class="white-text text-lighten-1">Our collections</p>
        <p class="white-text text-lighten-1">Contact us</p>
      </div>

<div class="container">
<h6>FOLLOW US</h6>
    <ul id="social" style="list-style-type:none; font-size:36px; display:inline; margin-right:20px">
    
    <li><i class="fab fa-twitter"></i></li>
    <li><i class="fab fa-facebook"></i></li>
    <li><i class="fab fa-instagram"></i></li>
    <li><i class="fa fa-pinterest-square"></i></li>
    
    </ul>
    </div>
    </footer>
  
    <div class="footer-copyright pink lighten-5">
      <div class="row">
        <p class="blue-grey-text dark"> © 2020 Shoequelize, All rights reserved.</p>
      </div>
    </div>
    
  `
  );
});
