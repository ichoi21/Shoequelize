$(document).ready(function () {
  $("nav").html(
    `
    <div class="nav-wrapper green lighten-2">
    <div class="row">
      <div class="col sm-12">
        <a href="#" class="brand-logo"
          >Shoe<span class="deep-orange-text"
            >q<span class="yellow-text">u</span>e</span
          >lize</a
        >
        <a href="#!" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
      </div>
      <ul class="right hide-on-med-and-down">
        <li>
          <a class="signupBtn" href="#!"
            ><i class="material-icons right">assignment</i>Sign up</a
          >
        </li>
        <li>
          <a class="loginBtn" href="#!"
            ><i class="material-icons right">account_circle</i>Login</a
          >
        </li>
      </ul>
    </div>
    </div>

  `
  );
});

$(document).ready(function () {
  $(".sidenav").sidenav();
});

/* OLD NAV BAR CODE */
/* <div class="nav-wrapper green lighten-2">
  <a href="#" class="brand-logo">
    Shoe
    <span class="deep-orange-text">
      q<span class="yellow-text">u</span>e
    </span>
    lize
  </a>
  <ul id="nav-mobile" class="right hide-on-med-and-down">
    <li>
      <a href="./home.html">Home</a>
    </li>
    <li>
      <a href="./about.html">About</a>
    </li>
    <li>
      <a href="./my_collection.html">My Collection</a>
    </li>
    <li>
      <a href="./press.html">Press</a>
    </li>
    <li>
      <a href="./help.html">Help</a>
    </li>
    <li>
      <a href="./login.html">Login</a>
    </li>
    <li>
      <a href="./sign_up.html">Sign Up</a>
    </li>
  </ul>
</div>; */
