import React from 'react'

export class Attraction extends React.Component {
    render() {
        return(
            <div className='w-1/4 border-black border-[1px] bg-cyan-50'>
                <p className='font-bold'>Grand Bassin du Jardin du Luxembourg</p>
                <img src="http://placekitten.com/g/100/100" alt="" />
                <div>
                    <p className='text-cyan-900'>Address:</p>
                    <p>Jardin du Luxembourg, Paris, France</p>
                </div>
            </div>
        )
    }
}