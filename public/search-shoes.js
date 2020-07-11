// code currently not working, getting error 403

const axios = require("axios");

// Make a request for a user with a given ID
axios
  .get("https://stockx.com/api/browse?&_search=yeezy")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
