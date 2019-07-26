import React, {Component} from 'react';
// import API from '../../utils/API';
import ResultList from './ResultList';

class WaitTimes extends Component {

    constructor(){
        super();
        this.state ={
            results: []
        };
    }
    // state = {
    //     results: []
    // };

    componentDidMount() {
        this.searchPark();
    }

    // searchPark = () => {
    //     API.search()
    //     .then(res => this.setState({results: res.data.data})).then(console.log(this.state.results))
    //     .catch(err => console.log(err))
    // }

    searchPark = () =>{
        fetch(`/rides`)
        .then(response => {
            console.log(response)
            return response.json()
        }).then(rides => {
            this.setState({results: rides})
            console.log(this.state)
        })
        .catch(err =>console.log(err))
        .then(setTimeout(this.searchPark, 1000 * 60 * 5))

    }

    render() {
        return (
            <div>
                <ResultList results={this.state.results} key={this.state.results.key} />
            </div>
        )
    }
}

export default WaitTimes;