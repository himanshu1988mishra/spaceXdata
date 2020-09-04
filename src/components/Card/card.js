import React from 'react'

function Card({flights}) {
  return (
    <React.Fragment>
      {
        flights.map(flight => {
          return (
            <article key={flight.flight_number}>
              <div>
                <img src={flight.links.mission_patch_small} alt="Flight" />
                <h2>{flight.mission_name} #{flight.flight_number}</h2>
                <p>
                  <strong>Mission Ids:</strong>
                </p>
                <ul>
                {flight.mission_id.map((id, index) => <li key={index}>{id}</li>)}
                </ul>
                
                <p>
                  <strong>Launch Year: </strong> {flight.launch_year}
                </p>
                <p>
                  <strong>Successful Launch: </strong> {`${flight.launch_success}`}
                </p>
                <p>
                  <strong>Successful Landing: </strong> {`${flight.rocket.first_stage.cores[0].land_success}`}
                </p>
              </div>
            </article>
          )
        })
      }
    </React.Fragment>
  )
}

export default Card
