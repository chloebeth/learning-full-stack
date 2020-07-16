import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

// extend React.Component to have it be an element with a state instead of stateless
class App extends React.Component {
    state = { 
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };
    // lifecycle methods
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <ContestList contests={this.state.contests} />
            </div>
        );  
    };
};

export default App;
