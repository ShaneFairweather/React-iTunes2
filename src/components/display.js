import React, { Component } from 'react';
import Result from './result';

const Display = (props) => {
    var shortList = props.results;
    var newArray = shortList.slice(0, 25);
    const resultsList = newArray.map((item) => {
        return (
            <Result artistName={item.artistName}
                    trackName={item.trackName}
                    imageUrl={item.artworkUrl100.replace('100x100', '1200x1200')}
                    trackUrl={item.trackViewUrl}
                    trackPrice={item.trackPrice}
                    releaseDate={item.releaseDate}
                    trackTime={item.trackTimeMillis}
                    onItemSelect={props.getSelected}
                    albumName={item.collectionName}
            />
        )
    })
    if (shortList.length == 0) {
        return <div className="lead">Type in the search bar to find a song</div>
    } else {
        return (
            <div className="display">
                {resultsList}
            </div>
        )
    }
}

export default Display;