import React from 'react'
import "../Style Components/Footer.css"

export const Footer = () => {
  return (   
    <section className='Footer'>
      <article className='Footer-Name'>
        <img src="../../public/Logo_wh.png" alt="" />
        <div>
          <p>
          <strong>Roberto Martínez </strong><span>Full-Stack Developer</span>
          </p>
        </div>
      </article>
      <div className='Contacto'>
        <img src="/mail.svg" alt="Mail-image" className='footer-img' />
         <span>roberto.mar.garc@gmail.com</span>
      </div>
      <div className='Contacto'>
        <a href="https://www.linkedin.com/in/roberto-mart%C3%ADnez-52ba10215/">
          <img src="/li.svg" alt="https://www.linkedin.com/in/roberto-mart%C3%ADnez-52ba10215/" 
          className='footer-img'/>
        </a>
        <a href="https://github.com/Robmargar">
          <img src="/git.svg" alt="https://github.com/Robmargar" className='footer-img'/>
        </a>
      </div>
        
    </section>
  )
}
