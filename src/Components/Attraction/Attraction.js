import React from 'react';

export class Attraction extends React.Component {
    render() {
        return(
            <div className='p-4 space-y-2 bg-white min-h-[250px] min-w-[300px]'>
                <p className='font-bold'>Grand Bassin du Jardin du Luxembourg</p>
                <div>
                    <p className='font-bold text-cyan-900'>Address:</p>
                    <p>Jardin du Luxembourg, Paris, France</p>
                </div>
                <img src="http://placekitten.com/g/100/100" alt="" />
                
            </div>
        )
    }
}