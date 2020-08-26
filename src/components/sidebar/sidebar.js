import React, { useState } from 'react'

function Sidebar(props) {

  const years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
  const [btnValues] = useState(years)

  return (
    <React.Fragment>
      <h3>Filters</h3>
      <div className="filters">
        <p>Launch Year</p>
        <div className="filter-btns">
          {
            btnValues.map(year => (
                <button key={year} value={year} onClick={props.filter}>
                  {year}
                </button>
              )
            )
          }
        </div>
        
        <p>Successful Launch</p>
        <div className="filter-btns">
          <button value="True">True</button>
          <button value="False">False</button>
        </div>
        
        <p>Successful Landing</p>
        <div className="filter-btns">
          <button value="True">True</button>
          <button value="False">False</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar
