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
            <p className='pb-10 text-5xl text-cyan-900'>Paris</p>
            <div className='flex gap-x-10'>
              <div>
                <p className='pb-5 text-xl'>Current weather</p>
                <Weather />
              </div>
              <div>
              <p className='pb-5 text-xl '>Top Attractions</p>
                <AttractionList />
              </div>
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