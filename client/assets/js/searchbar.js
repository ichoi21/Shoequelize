$(document).ready(function () {
  $("nav").append(
    `
    <div class="row" id="searchBar">
          <div class="col s12 m10 l6 offset-l3 offset-m1">
            <div class="card">
              <form class="light-green lighten-5">
                <div class="row green lighten-3">
                  <div class="col s10 m2 l3 offset-m2 offset-l1">
                    <div class="input-field">
                      <input type="text" id="query" data-length="30" />
                      <label for="query">Shoe Name</label>
                    </div>
                  </div>
                  <div class="col input-field s10 m2 l3">
                    <select class="icons" id="shoeBrand">
                      <option value="" disabled selected>Brand</option>
                      <option
                        value="Nike"
                        data-icon="./assets/img/icons/icon_nike.png"
                        >Nike</option
                      >
                      <option
                        value="Jordan"
                        data-icon="./assets/img/icons/icon_jordan.png"
                        >Jordan</option
                      >
                      <option
                        value="Adidas"
                        data-icon="./assets/img/icons/icon_adidas.png"
                        >Adidas</option
                      >
                      <option
                        value="Reebok"
                        data-icon="./assets/img/icons/icon_reebok.png"
                        >Reebok</option
                      >
                      <option
                        value="Converse"
                        data-icon="./assets/img/icons/icon_converse.png"
                        >Converse</option
                      >
                      <option
                        value="Under Armour"
                        data-icon="./assets/img/icons/icon_ua.png"
                        >Under Armour</option
                      >
                    </select>
                  </div>

                  <div class="col input-field s10 m1 l1">
                    <input type="text" id="shoeYr" data-length="4" />
                    <label for="shoeYr">Year</label>
                  </div>
                  <div class="col input-field s10 m2 l1">
                    <select id="shoeGdr">
                      <option value="" disabled selected>Gender</option>
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                      <option value="toddler">Toddler</option>
                      <option value="preschool">Pre-School</option>
                      <option value="big kids">Big Kids</option>
                    </select>
                  </div>
                  <div class="col s10 m3" style="margin-top: 20px;">
                    <button
                      type="button"
                      id="btnSearch"
                      class="waves-effect waves-green btn-flat cyan"
                    >
                      Search
                      <i class="material-icons right">
                        search
                      </i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  `
  );
});

$(document).ready(function () {
  $("select").formSelect();
});
