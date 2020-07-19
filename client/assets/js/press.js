//This is the about developer's press appended into the mainBody id when clicked on

$(document).on("click", "#btnPress", function (e) {
  e.preventDefault();
  $("#mainBody").html(
    `
  <div class="padding white-text blue-grey darken-2">
    <div class="container">
      <div class="row">
        <h4>Developer's Press</h4>
      </div>
      <div class="row">
      <div class="card z-depth-3 transparent white-text">
        <table class="highlight">
        <thead>
          <tr>
              <th>Date</th>
              <th>Development News</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>7.06.20</td>
          <td>Start of Shoe Collection App - Shoequelize
          <br>Deployed Git Hub Repo
          </td>
        </tr>
        <tr>
          <td>7.07.20</td>
          <td>Concept of MVP agreed - sequelized initiated for shoes.</td>
        </tr>
        <tr>
          <td>7.08.20</td>
          <td>Based HTMLs and APIs deployed.
          <br>Layout of HTML concept has been agreed and pushed. 
          </td>
        </tr>
        <tr>
        <td>7.10.20</td>
        <td>StockX npm eliminated - used real API from StockX</td>
        </tr>
        <tr>
        <td>7.10.20</td>
        <td>API routes for server and clients deployed. 3rd party data is now being pulled.</td>
        </tr>
        <tr>
        <td>7.11.20</td>
        <td>Created models for user inputs with axios to inquirer filtered data.</td>
        </tr>
        <tr>
        <td>7.12.20</td>
        <td>Users can now add to database for their collection.
        <br>Server clean up. 
        </td>
        </tr>
        <tr>
        <td>7.13.20</td>
        <td>Shoequelize 1.0 -> 2.0 Redeployment with new features
        <br>Users now can create accounts to save database securely with authentication. 
        </td>
        </tr>
        <tr>
        <td>7.14.20</td>
        <td>Search bars with defined parameters for precise search.</td>
        </tr>
        <tr>
        <td>7.15.20</td>
        <td>Search does not require to be signed in.
        <br>Data now formatted in cards for better visibility. 
        </td>
        </tr>
        <tr>
        <td>7.16.20</td>
        <td>Development team introduced.
        <br>Data now formatted in tables as well to simplify view.
        </td>
        </tr>
        <tr>
        <td>7.17.20</td>
        <td>Users can now delete from collection. 
        <br>HTML files converted to JS.
        </td>
        </tr>
        <tr>
        <td>7.18.20</td>
        <td>Users can now add comments to each shoe. 
        <br>UI enhanced for better experience. 
        </td>
        </tr>
        <tr>
        <td>7.19.20</td>
        <td>Deployment to Heroku - Beta service is online!
        </td>
        </tr>
        <tr>
        <td>7.20.20</td>
        <td>Shoequelize Kick Off!
        </td>
        </tr>
      </tbody>
    </table>
        </table>
      </div>
    </div> 
  </div>
  `
  );
});
