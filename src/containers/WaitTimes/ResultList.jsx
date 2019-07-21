import React from 'react';

function ResultList(props) {
    return (
        <ul className="list-group">
            {props.results.map(result => (
                <li className="list-group-item" key={result.id}>
                    <h5>{result.name}</h5>
                    <p>{result.time} Minutes Wait</p>
                </li>
            ))}
        </ul>
    )
}

export default ResultList;