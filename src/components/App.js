import React, { Component } from 'react';

import _ from  'lodash';
import Title from './title';
import SearchBar from './searchbar';
import Selected from './selected';
import Display from './display';
import Footer from './footer';
import $ from 'jquery';




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
        this.callbackForGet = this.callbackForGet.bind(this);
        // this.getSelected = this.getSelected.bind(this);
    }

    callbackForGet() {
        console.log("online");
    }

    getResults(term, type) {
        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        const url = `https://itunes.apple.com/search?term=${term}${this.state.type}`;

        $.ajax({
            url: url,
            data: {
                format: 'json'
            },
            type: 'GET',
            dataType: 'jsonp',
            success: (data) => {
                console.log(data);
                this.setState({ results: data.results })
            },
            error: (error) => {
                console.log(error);
            }
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
