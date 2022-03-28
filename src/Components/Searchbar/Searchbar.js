import React from "react";

export class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            searchWord: ''
        }
        this.handleSaveSearch = this.handleSaveSearch.bind(this);
        this.search = this.search.bind(this);
    }

    handleSaveSearch(e) {
        const searchWord = e.target.tagName === 'input' ? e.target.value : document.getElementById('searchBox').value

        this.setState({
            searchWord: searchWord
        }, this.search)
    }

    //this passes the search method passed to it in App.js the searchword saved in state
    search() {
        this.props.onSearch(this.state.searchWord);
    }

    render() {
        return (
            <div className='flex items-center'>
              <input id="searchBox" type="text" placeholder='Rome, Paris, Berlin...' className='border-cyan-900 border-[1px] rounded p-1' />
              <div onClick={this.handleSaveSearch} className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
        )
    }
}