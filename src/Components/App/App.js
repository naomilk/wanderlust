import React from 'react';
import { Weather } from '../Weather/Weather';
import { AttractionList } from '../AttractionList/AttractionList';
import { Searchbar } from '../Searchbar/Searchbar';
import { nearbyPlaces } from '../../util/PlacesAPI';
import { getWeather } from '../../util/OpenWeatherAPI';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchWord: '',
      weatherResults: {},
      temperature: '',
      condition:'',
      
    }
    this.search = this.search.bind(this)
  }

  //passes the search word from searchbar to nearbyPlaces & getWeather funcs, and once json responses are received, saves the results to seperate elements in state for us to access later
  search(searchWord) {
    //places
    nearbyPlaces(searchWord).then((results) => {
      this.setState({
        searchResults: results.splice(0, 4),
        searchWord: searchWord,
      }, () => {
        if(!this.state.searchResults.length) {
          alert('invalid search');
          this.setState({
            searchWord: ''
          })
        };
      })
    });

    //weather
    getWeather(searchWord).then((results) => {
      this.setState({
        weatherResults: results,
      })
    })
  }

  render() {
    return (
      <div className='font-nunito'>
        <header className='flex items-center justify-center h-28 bg-gradient-to-b from-cyan-200 to-white'>
          <p className='text-5xl font-semibold text-cyan-900'>Wanderlust</p>
        </header>
        <main className='m-28'>

          {/* search box start */}
          <div className='flex flex-col items-center px-10 pt-4 mb-10'>
            <p className='mb-4 text-xl'>Where do you want to visit?</p>
            <Searchbar onSearch={this.search} />
          </div>
          {/* search box end */}

          {/* results start */}
          <div className='flex flex-col px-10 py-20 align-middle bg-cover rounded bg-travel-bg bg-[rgba(249,249,249,0.76)] bg-blend-lighten'>
            <p className='pb-10 text-5xl capitalize text-cyan-900'>{this.state.searchWord}</p>
            <div className='flex gap-x-5'>
                {
                  Object.keys(this.state.weatherResults).length > 0 &&
                  <div>
                    <Weather temperature={this.state.weatherResults.main.temp} condition={this.state.weatherResults.weather[0].description} icon={`https://openweathermap.org/img/wn/${this.state.weatherResults.weather[0].icon}.png`}/>
                  </div>
                }

                {
                  this.state.searchResults.length > 0 &&
                    <div>
                      <AttractionList results={this.state.searchResults} />
                    </div>
                }
            </div>
          </div>
          {/* results end */}
        </main>
        <footer className='fixed bottom-0 flex items-center justify-center w-screen h-14 bg-cyan-100'>
          <p className='text-cyan-900'>Copyright &copy; 2022 Naomi Kangwa</p>
        </footer>
      </div>
    )
  }
}