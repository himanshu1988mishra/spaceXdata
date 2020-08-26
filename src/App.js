import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar'
import Card from './components/Card/card';

function App() {
  
  let [flights, setFlights] = useState([])

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches?limit=100')
    .then(res => res.json())
    .then(result => setFlights(result))
  }, [])

  const Filtered = year => {
    let FYear = flights.filter(flight => flight.launch_year === year)
    setFlights(FYear)
  }
  
  return (
    <div className="App">
      <h1>SpaceX Launch Programs</h1>
      <main>
        <aside>
          <Sidebar filter={() => Filtered('2006')} />
        </aside>
        <section>
          <Card flights={flights} />
        </section>
      </main>
    </div>
  );
}

export default App;
