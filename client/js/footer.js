$(document).ready(function () {
  $("footer").html(
    `
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="blue-grey-text">Company's Info</h5>
          <p class="blue-grey-text text-lighten-1">Contact Us</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="blue-grey-text">Social Media</h5>
          <ul>
            <li>
              <a class="blue-grey-text text-lighten-1" href="#!">Twitter</a>
            </li>
            <li>
              <a class="blue-grey-text text-lighten-1" href="#!">Facebook</a>
            </li>
            <li>
              <a class="blue-grey-text text-lighten-1" href="#!">Instagram</a>
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
