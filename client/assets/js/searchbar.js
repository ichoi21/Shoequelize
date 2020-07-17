$(document).ready(function () {
  $("nav").append(
    `
    <div class="row" id="searchBar">
    <div class="col s12 m10 offset-m1">
    <div id="searchBar" class="card">
      <form class="light-green lighten-5">
        <div class="row">
          <div class="col s10 m2 offset-m1">
            <input type="text" id="query" placeholder="  Shoe Name" />
          </div>
          <div class="col s10 m3">
            <select class="icons" id="shoeBrand">
              <option value="" disabled selected
                >Choose your Brand</option
              >
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

          <div class="col s10 m1">
            <input type="text" id="shoeYr" placeholder="  Year" />
          </div>
          <div class="col s10 m2">
            <select id="shoeGdr">
              <option value="" disabled selected>Gender</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="toddler">Toddler</option>
              <option value="preschool">Pre-School</option>
              <option value="big kids">Big Kids</option>
            </select>
          </div>
          <div
            class="col s10 m3"
            style="margin-bottom: 10px; margin-top: 10px;"
          >
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
  `
  );
});

$(document).ready(function () {
  $("select").formSelect();
});
