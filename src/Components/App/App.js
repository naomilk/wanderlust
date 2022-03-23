import React from 'react';
import { Weather } from '../Weather/Weather';
import { AttractionList } from '../AttractionList/AttractionList';
import { Searchbar } from '../Searchbar/Searchbar';
import { nearbyPlaces } from '../../util/PlacesAPI';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
  }

  //passes the search word from searchbar to the nearbyPlaces var and once we have a json response, saves that response to state under searchResults
  search(searchWord) {
    nearbyPlaces(searchWord).then((searchResults => {
      this.setState({ searchResults: searchResults})
    }))
  }

  render() {
    return (
      <div className='font-nunito'>
        <header className='h-28 bg-cyan-100 flex justify-center items-center'>
          <p className='font-black text-cyan-900 text-3xl'>Wanderlust</p>
        </header>
        <main className='m-28'>

          {/* search box start */}
          <div className='border-black border-[1px] px-10 py-4 flex items-center flex-col'>
            <p>Where do you want to visit?</p>
            <Searchbar onSearch={this.search} />
          </div>
          {/* search box end */}

          {/* results start */}
          <div className='border-black border-[1px] px-10 py-4 flex  flex-col align-middle'>
            <p className='text-3xl text-cyan-900'>Paris</p>
            <div>
              <p>Current weather:</p>
              <Weather />
            </div>
            <div>
              <p>Top Attractions:</p>
              <AttractionList />
            </div>
          </div>
          {/* results end */}
        </main>
      </div>
    )
  }
}