$(document).ready(function () {
  $("nav").html(
    `
    <div class="nav-wrapper green lighten-2">
    <div class="row">
      <div class="col sm-12">
        <a href="#!" class="brand-logo"
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
          <a id="shoeCollection" href="#!"
            ><i class="material-icons right">assignment</i>Collection</a
          >
        </li>
        <li>
          <a class="logoutBtn" href="/auth/logout"
            ><i class="material-icons right">exit_to_app</i>Logout</a
          >
        </li>
      </ul>
    </div>
  </div>
  <div id="alert" class="col s12 m4 l4 right-align"></div>
  `
  );

  $(".sidenav").html(
    `
    <li>
    <a class="shoeCollection" href="#!"
      ><i class="material-icons right">assignment</i>Collection</a
    >
  </li>
  <li>
    <a class="logoutBtn" href="/auth/logout"
      ><i class="material-icons right">exit_to_app</i>Logout</a
    >
  </li>
  `
  );
});
