import React from 'react';
import NavBar from '../components/NavBar';
import { countVoteTypes, hasVotesFilter, factualRankings, emotionalRankings, findRank } from '../utilities/rankings';
import Tabs from 'react-tabs-navigation';

const RankingsPage = React.createClass({

    getInitialState() {
        return {
            user: {},
            statements: [],
            view: 'factual',
            view1:'emotional',
        }
    },

    componentWillMount() {
        if(initialState) {
            this.setState(initialState);
        }
    },

    /*handleNext() {
        const { view } = this.state;

        if(view == 'factual') {
            this.setState({view: 'emotional'});
        }
    },

    handleBack() {
        const { view } = this.state;

        if(view == 'emotional') {
            this.setState({view: 'factual'});
        }
    },*/

    render() {
        const { user, statements, view ,view1} = this.state;

        const cachedVoteStatements = countVoteTypes(statements.filter(hasVotesFilter));

        const factualStatements = factualRankings([...cachedVoteStatements]);

        const emotionalStatements = emotionalRankings([...cachedVoteStatements]);

        const factualRank = findRank(factualStatements, user._id);

        const emotionalRank = findRank(emotionalStatements, user._id); // Set these vars before shifts below

        const topFactualStatement = factualStatements.shift();
        const topEmotionalStatement = emotionalStatements.shift();

        const profileImage = user.image || "images/pexels-photo-103123.jpeg";

        return (
            <section className="rankings-section pb4">
                <NavBar user={user}/>
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundColor: "#CCCCCC" }}>
                        <div className="my-ranking">
                            <p className="my-info"><a href={"/profile/" + user._id } style={{background: "url(" + profileImage + ") center center no-repeat"}}></a> { user.username }</p>
                        </div>
                        <div className="top-ranks">

                        <Tabs
                            tabs={[
                                {
                                    children: () => (

                                        <div className="rank-content">
                                { view == 'factual' && (<div>
                                        <div className="my-rank-num ">
                                            <p className="my-rank">My Rank : { view == 'factual' ? (factualRank ? '#' + factualRank : 'N/A'): 'N/A'}</p>
                                        </div>
                                            <h2><img src="images/best-debater.png" className="m0" style={{maxHeight:"28px"}}/> Most Factual Debater</h2>
                                    <p style={{fontSize:"15px", textAlign: "center"}}> Rank on the basis of votes received for factual arguments </p>
                                { factualStatements.length == 0 && (<p className="mt4 center">Waiting for more votes.</p>) }
                                <div className="rank-container">
                                    { topFactualStatement && (
                                        <div className="first-place">
                                            <div className="rank-item"><span className="rank-number">1</span> { topFactualStatement.user.username }</div>
                                        </div>
                                    )}
                                    <div className="clearfix" style={{minHeight: "520px"}}>
                                        <div className="col col-6 pr1">
                                            <ul>
                                                { factualStatements.slice(0,13).map((d, i) => {
                                                    return (<li className="rank-item" key={i}><span className="rank-number">{ i + 2 }</span> { d.user.username}</li>)
                                                }) }
                                            </ul>
                                        </div>
                                        <div className="col col-6 pl1">
                                            <ul>
                                                { factualStatements.slice(13,24).map((d, i) => {
                                                    return (<li className="rank-item" key={i}><span className="rank-number">{ i + 15 }</span> { d.user.username }</li>)
                                                }) }
                                            </ul>
                                        </div>
                                    </div>
                                </div></div>) }
                                        </div>
                                ),
                                displayName: 'Most Factual Debater'
                                },
                                            {
                                                children : () => (
                                                    <div className="rank-content">
                                { view1 == 'emotional' && (<div>
                                    <div className="my-rank-num">
                                        <p className="my-rank">My Rank : { view1 == 'emotional' ? (emotionalRank ? '#' + emotionalRank : 'N/A'): 'N/A'}</p>
                                    </div>
                                    <h2><i className="fa fa-hand-peace-o" aria-hidden="true" /> Most Emotional Debater</h2>

                                        <p style = {{fontSize:"15px", textAlign: "center"}}>Rank on the basis of votes received for most emotional appeal</p>

                                    { emotionalStatements.length == 0 && (<p className="mt4 center">Waiting for more votes.</p>) }
                                    <div className="rank-container">
                                        { topEmotionalStatement && (
                                            <div className="first-place">
                                                <div className="rank-item"><span className="rank-number">1</span> { topEmotionalStatement.user.username }</div>
                                            </div>
                                        )}
                                        <div className="clearfix" style={{minHeight: "520px"}}>
                                            <div className="col col-6 pr1">
                                                <ul>
                                                    { emotionalStatements.slice(0,13).map((d, i) => {
                                                        return (<li className="rank-item" key={i}><span className="rank-number">{ i + 2 }</span> { d.user.username }</li>)
                                                    }) }
                                                </ul>
                                            </div>
                                            <div className="col col-6 pl1">
                                                <ul>
                                                    { emotionalStatements.slice(13,24).map((d, i) => {
                                                        return (<li className="rank-item" key={i}><span className="rank-number">{ i + 15 }</span> { d.user.username }</li>)
                                                    }) }
                                                </ul>
                                            </div>
                                        </div>
                                    </div></div> )}
                                                    </div>
                                                        ),
                                                        displayName: 'Most Emotional Debater'
                                                        },
                            ]}
                        />
                        </div>
                        </div>
                </div>
            </section>
        );
    }
});

export default RankingsPage;