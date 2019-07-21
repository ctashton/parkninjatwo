import React from 'react';
import WaitTimes from '../../../containers/WaitTimes/WaitTimes'

function Home() {
    return (
        <div>
            <div className="wrapper">

                <div className="jumbotron jumbotron-fluid">

                    <div className="container">
                        <h1 className="display-4">Park Ninja!</h1>
                    </div>

                </div>
                <div className="container">

                    <h2 className="text-center">View Magic Kingdom Wait Times Below</h2>
                </div>
                <WaitTimes />
            </div>
        </div>



    )
}

export default Home;