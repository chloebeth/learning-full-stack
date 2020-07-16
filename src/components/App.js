import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

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
    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        );
        api.fetchContest(contestId).then(contest => {
            // lookup the contest
            this.setState({
                pageHeader: contest.contestName,
                currentContestId: contest.id,
                contests: {
                    ...this.state.contests,
                    [contest.id]: contest
                }
            });
        });
    };
    currentContest() {
        if (this.state.currentContestId) {
            return <Contest {...this.state.contests[this.state.currentContestId]} />;
        }

        return <ContestList
                onContestClick={this.fetchContest}
                contests={this.state.contests} />;
    };
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                {this.currentContest()}
            </div>
        );  
    };
};

export default App;
