import React from "react";

export class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            searchWord: ''
        }
        this.handleSaveSearch = this.handleSaveSearch.bind(this)
    }

    handleSaveSearch(e) {
        const searchWord = e.target.tagName === 'input' ? e.target.value : document.getElementById('searchBox').value

        this.setState({
            searchWord: searchWord
        }, () => console.log(this.state.searchWord))
    }

    search() {
        this.props.onSearch(this.state.searchWord);
    }

    render() {
        return (
            <div className='flex align-middle'>
              <input id="searchBox" onBlur={this.handleSaveSearch} type="text" placeholder='Rome, Paris, Berlin...' className='border-black border-[1px]' />
              <div onClick={this.handleSaveSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 border-black border-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              </div>
            </div>
        )
    }
}