import React from 'react';

export class Attraction extends React.Component {
    render() {
        return(
            <div className='p-4 bg-white w-[300px]'>
                <p className='font-bold'>{this.props.name}</p>
                <p className='pb-4'>{this.props.type}</p>
                <div className='pb-4'>
                    <p className='font-bold text-cyan-900'>Address:</p>
                    <p>{this.props.address}</p>
                </div>
                <img src={this.props.icon} alt="" />
                
            </div>
        )
    }
}