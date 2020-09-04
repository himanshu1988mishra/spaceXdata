import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar'
import Card from './components/Card/card';

function App() {
  let [initalList, setInitialList] = useState([])
  let [filteredList, setFilteredList] = useState([...initalList])
  let hasClicked = false
  
  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches?limit=100')
    .then(res => res.json())
    .then(result => {
      setInitialList(result)
    })
  }, [])

  const btn = document.querySelectorAll('.filter-btns button');
  console.log(btn)

  const FilteredYear = year => {
    let FYear = initalList.filter(flight => flight.launch_year === year)
    setFilteredList(FYear)
  }

  const FilteredLaunch = launcher => {
    let FYear = initalList.filter(flight => flight.launch_success === launcher)
    setFilteredList(FYear)
  }

  const handleYearClick = (e) => {
    hasClicked = true
    e.preventDefault()
    const term = e.target.value
    initalList.forEach(function(flight) {
      FilteredYear(term)
    })
  }

  const handleLaunchClick = (e) => {
    e.preventDefault()
    const term = e.target.value
    initalList.forEach(function(flight) {
      FilteredLaunch(term)
    })
  }

  return (
    <div className="App">
      <h1>SpaceX Launch Programs</h1>
      <main>
        <aside>
          <Sidebar filter={initalList} 
            handleYearClick={handleYearClick} 
            handleLaunchClick={handleLaunchClick} 
          />
        </aside>
        <section>
          <Card flights={filteredList}>{initalList}</Card>
        </section>
      </main>
    </div>
  );
}

export default App;
