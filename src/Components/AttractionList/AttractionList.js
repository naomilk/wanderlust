import React from 'react';
import { Attraction } from '../Attraction/Attraction'

export class AttractionList extends React.Component {
    render() {
        const attractionList = this.props.results.map((result) => {
            return (
                <Attraction name={result.name} type={result.categories[0].name} icon={`${result.categories[0].icon.prefix}bg_44${result.categories[0].icon.suffix}`} address={result.location.formatted_address} key={result.fsq_id}/>
            )
          });
        return (
            <>
                <div className=''>
                    <p className='pb-5 text-xl '>Top Attractions</p>
                    <div className='flex flex-wrap gap-5'>
                        { attractionList }
                    </div>
                </div>
            </>
        )
    }
}