$(document).ready(function () {
  // innerHTML specific searchBar.
  $("#searchBar").html(
    `
        <div class="card">
          <form class="light-green lighten-5">
            <div class="col s10 m2 l2 offset-m2 offset-l2">
              <div class="input-field">
                <input type="text" id="query" data-length="30" />
                <label for="query" class="black-text">Shoe Name</label>
              </div>
            </div>
            <div class="col input-field s10 m2 l3">
              <select class="icons" id="shoeBrand">
                <option value="" disabled selected class="teal-text">Brand</option>
                <option value="Nike" data-icon="./assets/img/icons/icon_nike.png">Nike</option>
                <option value="Jordan" data-icon="./assets/img/icons/icon_jordan.png">Jordan</option>
                <option value="Adidas" data-icon="./assets/img/icons/icon_adidas.png">Adidas</option>
                <option value="Reebok" data-icon="./assets/img/icons/icon_reebok.png">Reebok</option>
                <option value="Converse" data-icon="./assets/img/icons/icon_converse.png">Converse</option>
                <option value="Under Armour" data-icon="./assets/img/icons/icon_ua.png">Under Armour</option>
              </select>
            </div>
            <div class="col input-field s10 m1 l1">
              <input type="text" id="shoeYr" data-length="4" />
              <label for="shoeYr" class="black-text">Year</label>
            </div>
            <div class="col input-field s10 m2 l1">
              <select id="shoeGdr">
                <option value="" disabled selected class="teal-text">Gender</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="toddler">Toddler</option>
                <option value="preschool">Pre-School</option>
                <option value="big kids">Big Kids</option>
              </select>
            </div>
            <div class="col s10 m3" style="margin-top: 20px;">
              <button type="button" id="btnSearch" class="waves-effect waves-green btn-flat cyan">
                Search<i class="material-icons right">search</i>
              </button>
            </div>
          </form>
        </div>
      `
  );

  // innerHTML database find searchBBar.
  $("#searchBBar").html(
    `
  <div class="col">
    <div class="card">
      <form>
        <div>
          <div class="col s10 m2 l8">
            <div class="input-field">
              <input type="text" id="query" data-length="30" />
              <label for="query" class="teal-text">Shoe Brand</label>
            </div>
          </div>
          <div class="col s10 m3" style="margin-top: 20px;">
            <button type="button" id="btnSearch" class="waves-effect waves-green btn-flat cyan">
            Search
            <i class="material-icons right">search</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  `
  );

  // innerHTML for registerModal.
  $("#registerModal").html(`
  <div class="modal-content">
        <h4>ShoeNatics</h4>
        <p>Register for your free account</p>
        <form id="registerForm">
          <div class="row">
            <div class="input-field col s12 m8 l8">
              <input id="registerAlias" type="text" />
              <label for="alias">Alias</label>
            </div>
            <div class="input-field col s12 m4 l4">
              <input id="registerSize" type="text" />
              <label for="registerSize">(US) Shoe Size</label>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="registerEmail" type="email" class="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="registerPassword" type="password" class="validate" />
                <label for="password">Password</label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col s6">
              <a
                href="#!"
                id="registerCancel"
                class="waves-effect waves-green btn-flat"
                ><i class="material-icons left">cancel</i>Cancel</a
              >
            </div>
            <div class="col s6">
              <div class="right-align">
                <button action="submit" class="waves-effect waves-light btn">
                  <i class="material-icons left">assignment</i>Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
  `);

  // innerHTML for loginModal.
  $("#loginModal").html(`
  <div class="modal-content m6 l4">
  <h4>ShoeNatics</h4>
  <p>Login to access your collection!</p>
  <form id="loginForm">
    <div class="row">
      <div class="input-field col s12">
        <input id="loginEmail" type="email" class="validate" />
        <label for="email">Email</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="loginPassword" type="password" class="validate" />
        <label for="password">Password</label>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <a
          href="#!"
          id="loginCancel"
          class="waves-effect waves-green btn-flat"
          ><i class="material-icons left">cancel</i>Cancel</a
        >
      </div>
      <div class="col s6">
        <div class="right-align">
          <button
            action="submit"
            class="waves-effect waves-light btn purple"
          >
            <i class="material-icons left">account_circle</i>Login
          </button>
        </div>
      </div>
    </div>
  </form>
</div>`);

  $("#deleteModal").html(`
<div class="modal-content">
<h4>Delete Shoes</h4>
<p>Are you sure you want to delete this shoes from your collection?</p>
<form id="deleteForm">
  <div class="row">
    <div class="col s6">
      <a
        href="#!"
        id="cancelDelete"
        class="waves-effect waves-green btn-flat"
        ><i class="material-icons left">cancel</i>Cancel</a
      >
    </div>
    <div class="col s6">
      <div class="right-align">
        <button
          id="delBtn"
          action="submit"
          class="waves-effect waves-light btn red"
        >
          <i class="material-icons left">delete</i>Delete
        </button>
      </div>
    </div>
  </div>
</form>
</div>
`);

  $("select").formSelect();
  $(".sidenav").sidenav();
});
