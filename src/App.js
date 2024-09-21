import React from 'react';
import ScoreKeeper from './components/ScoreKeeper';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <section className="section">
                <div className="container1">
                    <div className="card">
              <header className="card-header">
                <div className='pingimg'></div>
                            <p className="card-header-title">Ping Pong Score Keeper</p>
                        </header>
                        <div className="card-content">
                            <ScoreKeeper />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;