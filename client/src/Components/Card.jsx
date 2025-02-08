import React from 'react'

import "../Style Components/Card.css"


export const Card = ({jURL,jText, jTitle,jSalary,jFooter}) => {
  return (
    <a href={jURL} target="_blank" rel="Jobs">
      <article className='card shadow'>  
            <h2 className='title'>{jTitle}</h2>
            <h3 className='salary'> Sueldo: {jSalary}</h3>
            <p className='jtext'>{jText}</p>
            <div className='card-footer-loc ubication'>
              <img src="/local.svg" className='card-svg' alt="Clock " />
              <span> {jFooter[0]}</span>
            </div>
            <div className='card-footer-loc time'>
              <img src="/clock.svg" className='card-svg' alt="Clock " />
              <span> {jFooter[1]}</span>
            </div>
      </article>
    </a>
  )
}
