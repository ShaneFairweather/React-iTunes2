import React, { Component } from 'react';

const Selected = ({selected}) => {
    console.log(selected);
    function parseTime(milliseconds) {
        var minutes = Math.floor(milliseconds / 60000);
        var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    if(!selected) {
        return <div></div>
    }
    return (
        <div className="selected">
            <div className="selectedImage">
                <img src={selected.imageUrl} alt="selectedimg" />
            </div>
            <div className="selectedContent">
                <h3>{selected.trackName}</h3>
                <p>{selected.artistName}</p>
                <p>{selected.albumName}</p>
                {/*<p>{selected.releaseDate.slice(0, 4)}</p>*/}
                {/*<div className="selectedTime">*/}
                    <p>{parseTime(selected.trackTime)}</p>
                {/*</div>*/}
                <div className="selectedPrice">
                    <p>${selected.trackPrice}</p>
                </div>
                <div className="selectedButton">
                    <button><a href={selected.trackUrl}>View on iTunes.com</a></button>
                </div>
            </div>
        </div>
    )
}

export default Selected;