import React, { Component } from 'react';

import _ from  'lodash';
import Title from './title';
import SearchBar from './searchbar';
import Selected from './selected';
import Display from './display';
import Footer from './footer';
import axios from 'axios';



export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: "lightspeed champion",
            results: [],
            selected: null,
            type: "&entity=song"
        }
        this.getResults = this.getResults.bind(this);
        // this.getSelected = this.getSelected.bind(this);
    }

    getResults(term, type) {
        const url = `https://itunes.apple.com/search?term=${term}${this.state.type}`
        axios.get(url)
            .then((response) => {
                console.log("success")
                console.log(response.data.results[0].trackName);
                this.setState({ results: response.data.results })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // getSelected(item) {
    //     this.setState({selected: ""});
    //     console.log(item);
    // }


    render() {
        const itunesSearch = _.debounce((term) => {this.getResults(term)}, 300)

        return (
            <div id="main">
                <Title />
                <SearchBar getResults={term => this.getResults(term)} />
                <div className="content">
                    <Selected selected={this.state.selected} />
                    <Display results={this.state.results}
                             getSelected={item => this.setState({ selected: item })} />
                </div>
                <Footer />
            </div>
        );
    }
}
