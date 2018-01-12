import React, {Component} from 'react';
import '../App.css';
import Square from '../components/Square';

class SquareBox extends Component {

    render() {

        return (

            <div className='flex-container square-box '>
                {this.props.squares.map((index) => <Square key={index}/>
                )}
            </div>
        );
    }
}

export default SquareBox;

