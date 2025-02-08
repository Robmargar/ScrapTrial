import React from 'react'
import { Card } from './Card'

import "../Style Components/Cards.css"

export const Cards = ({results}) => {
  
  return (
    <div >
      <ul  className='list'>
      {results.map((result, index) => (
          <li key={index}>
              <Card
                  jURL={result.jURL}
                  jText={result.jText}
                  jTitle={result.jTitle}
                  jSalary={result.jSalary}
                  jFooter={result.jFooter}
              />                    
          </li>
          ))}
      </ul>
    </div>
  )
}
