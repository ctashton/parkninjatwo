import React from 'react';

function ResultList(props) {
    return (
        <ul className="list-group">
            {props.results.map(result => (
                <li className="list-group-item" key={result.id}>
                    <h5>{result.name} - {result.status} </h5>
                    <p>{result.waitTime} Minutes Wait</p>
                    <p>{result.active}</p>
                    <p>{result.area}</p>
                </li>
            ))}
        </ul>
    )
}

export default ResultList;