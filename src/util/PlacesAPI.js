const placesKey = 'fsq3gknjFCjCw/HbQnb/ZaTedVh/t4ovOJBtfCNUFhJuOPE=';
const baseUrl = 'https://api.foursquare.com/v3';

const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: placesKey,
    }
};

//seachWord will be passed in App.js
export const nearbyPlaces = async (searchWord) => {
    const endpoint = `${baseUrl}/places/nearby?query=${searchWord}`;
    try {
        const response = await fetch(endpoint, options);
        if(response.ok) {
            return await response.json();
        }

        throw new Error('Request failed!')
    } catch(error) {
        console.log(error)
    }
};