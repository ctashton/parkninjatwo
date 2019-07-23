import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand" >Park Ninja 2.0</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" >WaitTimes<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/signup" className="nav-link">Log In</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavTabs