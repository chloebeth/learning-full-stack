import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData';

// extend React.Component to have it be an element with a state instead of stateless
class App extends React.Component {
    state = { 
        pageHeader: 'Naming Contests',
        contests: []
    };
    // lifecycle methods
    componentDidMount() {
        this.setState({
            contests: data.contests
        });
        // axios.get('/api/contests')
        //     .then(resp => {
        //         this.setState({
        //             contests: resp.data.contests
        //         });
        //     })
        //     .catch(console.error);
    }
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
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );  
    };
};

export default App;