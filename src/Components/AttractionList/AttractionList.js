import React from 'react'
import { Attraction } from '../Attraction/Attraction'

export class AttractionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        //gonna need a loop at some point to render the Attractions
        return(
            <div className='flex gap-10'>
                <Attraction />
                <Attraction />
            </div>
        )
    }
}