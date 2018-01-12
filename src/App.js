import React, {Component} from 'react';
import SquareBox from './containers/SquareBox';
import './App.css';

let counter = 0;
let result = [];

class App extends Component {
    constructor(props) {
        super(props);
        this.HandleAddSquare = this.HandleAddSquare.bind(this);
        this.state = {
            squares: []
        }
    }

    HandleAddSquare() {
        counter += 1;
        result.push(counter);
        this.setState({squares: result});
    }

    render() {

        return (
            <div className="container">
                <button className="btn" onClick={this.HandleAddSquare}>Add square
                </button>
                <SquareBox squares={this.state.squares}/>
            </div>
        );
    }
}


export default App;
