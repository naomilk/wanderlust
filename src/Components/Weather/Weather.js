import React from 'react'

export class Weather extends React.Component {
    render() {
        return(
            <div className='p-4 space-y-2 bg-white min-h-[250px] min-w-[300px]'>
                <div className='flex gap-x-1'>
                    <p className='font-bold'>Temperature:</p>
                    <p>65F</p>
                </div>
                <div className='flex gap-x-1'>
                    <p className='font-bold'> Condition:</p>
                    <p>few clouds</p>
                </div>
                <img src="http://placekitten.com/g/100/100" alt="" />
            </div>
        )
    }
}