const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, data) => {
  if (error) {
    console.error('Error fetch details:', error);
  } else {
    if (data.length > 0) {
      console.log('Description:', data[0].description);
    } else {
      console.log('Breed not found.');
    }
  }
});
Z