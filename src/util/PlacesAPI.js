const placesKey = process.env.REACT_APP_PLACES_KEY;
const baseUrl = 'https://api.foursquare.com/v3';

const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: placesKey,
    }
};

//seachWord will be passed in App.js
//calling this should return a json file containing results of places with their id, name, photo etc
export async function nearbyPlaces(searchWord) {
    const queryParams = {
        near: searchWord
    }

    const endpoint = `${baseUrl}/places/search?${new URLSearchParams(queryParams).toString()}`;

    const response = await fetch(endpoint, options);
    if (response.ok) {
        const data = await response.json();

        if (! data.results) {
            return [];
        }

        return data.results;
    }

    if (! response.ok) {
        return [];
    }
}