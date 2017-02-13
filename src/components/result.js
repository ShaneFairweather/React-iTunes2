import React from 'react';

const Result = (props) => {
    function parseTime(milliseconds) {
        var minutes = Math.floor(milliseconds / 60000);
        var seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    return (

        <div className="result" onClick={() => props.onItemSelect(props)}>
            <div className="itunesButton">
                <button>View on iTunes.com</button>
            </div>
            <div className="resultImg">
                <img src={props.imageUrl} alt={props.trackName}/>
                <div className="clearBox"></div>
            </div>
            <div className="resultInfo">
                <h3>{props.trackName}</h3>
                <h5>{props.artistName}</h5>
                {/*<p className="price">${props.trackPrice}</p>*/}
                <p className="runTime">{parseTime(props.trackTime)}</p>
                <p>{props.releaseDate.slice(0, 4)}</p>
            </div>
        </div>
    )
}


export default Result;