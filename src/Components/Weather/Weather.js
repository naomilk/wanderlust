import React from 'react'

export class Weather extends React.Component {
    render() {
        return(
            <div>
                <p className='pb-5 text-xl '>Weather</p>
                <div className='p-4 space-y-2 bg-white min-h-[200px] w-[300px]'>
                    <div className='flex gap-x-1'>
                        <p className='font-bold'>Temperature:</p>
                        <p>{this.props.temperature}F</p>
                    </div>
                    <div className='flex gap-x-1'>
                        <p className='font-bold'> Condition:</p>
                        <p>{this.props.condition}</p>
                    </div>
                    <img src={this.props.icon} alt="" />
                </div>
            </div>
            
        )
    }
}