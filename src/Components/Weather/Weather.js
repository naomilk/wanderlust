import React from 'react'

export class Weather extends React.Component {
    render() {
        return(
            <div className='w-1/4 border-black border-[1px] bg-cyan-50'>
                <p>Wednesday</p>
                <div className='flex gap-x-1'>
                    <p>Temperature:</p>
                    <p>65F</p>
                </div>
                <div className='flex gap-x-1'>
                    <p>Condition:</p>
                    <p>few clouds</p>
                </div>
                <img src="http://placekitten.com/g/100/100" alt="" />
            </div>
        )
    }
}