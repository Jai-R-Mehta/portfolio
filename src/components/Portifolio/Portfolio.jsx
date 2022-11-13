import React from 'react'
import './Portfolio.css'
import Findr from '../../assets/Finder.jpg'
import Vally from '../../assets/VALLY.jpg'
import AS from '../../assets/AS.jpg'
import Pong from '../../assets/PONG.PNG'
import MATH from '../../assets/MATH.PNG'
import ANGLE from '../../assets/ANGLE.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'> 
    <h2>Projects</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={Findr}/>
          </div>
          <h3> Findr Mobile App</h3>
          <div className='portfolio__item-cta'>
          <a href='https://devpost.com/software/findr-u6ovgb' className='btn' target="_blank">DevPost</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={MATH}/>
          </div>
          <h3> Discord Bot that does derivatives</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Jai-R-Mehta/Discord_math_bot' className='btn' target="_blank">Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={Pong}/>
          </div>
          <h3> 3D Pong Game</h3>
          <div className='portfolio__item-cta'>
          <a href='https://jmapps.itch.io/neon-3d-pong' className='btn' target="_blank">Itch.io</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={Vally}/>
          </div>
          <h3> Valorant Soundboard App</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Jai-R-Mehta/VallyBoard' className='btn' target="_blank">Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={ANGLE}/>
          </div>
          <h3> Angle Managemnt Educational Web App</h3>
          <div className='portfolio__item-cta'>
          <a href='https://macoutreach.rocks/share/ad04e725' className='btn' target="_blank">Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={AS}/>
          </div>
          <h3> Asteroids Web Game</h3>
          <div className='portfolio__item-cta'>
          <a href='https://jsfiddle.net/Jai_M/rLtsg67f/1/' className='btn' target="_blank">JSFiddle</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Portfolio