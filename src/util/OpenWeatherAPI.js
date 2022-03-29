const openWeatherKey = process.env.REACT_APP_OPEN_WEATHER_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeather(searchWord) {
    const queryParams = {
        q: searchWord,
        APPID: openWeatherKey,
    };

    const endpoint = `${baseUrl}?${new URLSearchParams(queryParams).toString()}`;

    const response = await fetch(endpoint);
    if (response.ok) {
        const data = await response.json();

        if (! data) {
            return [];
        }

        return data;
    }

    if (! response.ok) {
        return [];
    }
}