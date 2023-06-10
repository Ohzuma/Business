import React from 'react'
import HeroImg from '../../assets/image/3.jpg'
import {AiFillPlayCircle} from 'react-icons/ai'

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className="hero-container">
            <div className="rh">
          <article>
          <h1><span>Corporate & Business   </span>
            <span>Site Template by Ayro UI.</span>
          </h1>
                <p>
                      We are a digital agency that helps brands
                      to achieve their business outcomes. 
                     We see technology as a tool to create
                  amazing things. 
                </p>
                <div>
                    <button type='button'>
                        GET STARTED
                    </button>
                    <a href='/'>
                        <AiFillPlayCircle/>
                        <span> Watch Intro</span>
                    </a>

                </div>
          </article>
            </div>
            <div className="lh">
                <img src={HeroImg} alt="Lady Hero" />
            </div>
        </div>

    </section>
  )
}

export default Hero