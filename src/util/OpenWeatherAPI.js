const openWeatherKey = 'd0d8faabcd030fc125c0acf7adaa496f';
const baseUrl = 'http://api.openweathermap.org/geo/1.0';

export async function getWeather(searchWord) {
    const queryParams = {
        q: searchWord,
        aapid: openWeatherKey,
        limit: 1
    };

    const endpoint = `${baseUrl}/direct?${new URLSearchParams(queryParams).toString()}`;

    const response = await fetch(endpoint);
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