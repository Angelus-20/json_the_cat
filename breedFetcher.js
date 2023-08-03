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

const breedName = process.argv[2];


fetchBreedDescription(breedName, (error, data) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    if (data.length > 0) {

      console.log('Description:', data[0].description);
    } else {
      console.log('Breed not found.');
    }
  }
});

module.exports = { fetchBreedDescription };