$(document).ready(function () {
  $("footer").html(
    `
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="blue-grey-text">Company's Info</h5>
          <p class="blue-grey-text text-lighten-1">Contact Us</p>         
          <p class="blue-grey-text text-lighten-1">Press</p>
          <p class="blue-grey-text text-lighten-1">SiteMap</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="blue-grey-text">Social Media</h5>
          <ul>
            <li>
              <a class="blue-grey-text text-lighten-1" href="#!">
                <span style="font-size: 36px; color: White;">
                  <i class="fab fa-twitter"></i></span></a>              
            </li>
            <li>
              <a class="blue-grey-text text-lighten-1" href="#!">
                <span span style="font-size: 36px; color: White;">
                  <i class="fab fa-facebook"></i></span></a>
            </li>
            <li>
              <a class="blue-grey-text text-lighten-1" href="#!">
                <span style="font-size: 36px; color: White;">
                  <i class="fab fa-instagram"></i></span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright grey lighten-3">
      <div class="row">
        <p class="blue-grey-text"> © 2020 Shoequelize, All rights reserved.</p>
      </div>
    </div>
  `
  );
});
