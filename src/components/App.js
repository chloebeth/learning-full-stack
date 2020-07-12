import React from 'react';
import Header from './Header';

// extend React.Component to have it be an element with a state instead of stateless
class App extends React.Component {
    state = { 
        pageHeader: 'Naming Contests'
    };
    // lifecycle methods
    // componentDidMount() {
    //     integration code dependent upon DOM
    //     timers
    //     listeners
    //     Ajax calls
    // }
    // componentWillUnmount() {
    //     console.log('will Unmount');
    // }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    ...
                </div>
            </div>
        );  
    };
};

export default App;
