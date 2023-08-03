const request = require('request');

const apiUrl = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = function(breedName, callback) {
  const query = `${apiUrl}?q=${breedName}`;

  request(query, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      try {
        const data = JSON.parse(body);
        callback(null, data);
      } catch (parseError) {
        callback(parseError, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
