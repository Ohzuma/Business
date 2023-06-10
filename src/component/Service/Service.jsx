import React from 'react'
import ServiceData from './ServiceData'
const Service = () => {
  return (
    <section className="ServiceSection">
        <header className="ServiceHeading">
            <h3>Service</h3>
            <h1>Our Best Service</h1>
            <p>
             There are many variations of passages of Lorem Ipsum
             available, but <br/> the majority have suffered alteration 
             in some form. 
             </p>
        </header>
        <div className="ServiceBoxes">
            {ServiceData.map((item)=>{
              const{icon,heading,description} = item;
              return <div className='box'>
                <div className="icons">
                  {icon}
                </div>
                  <h2>{heading}</h2>
                  <p>{description}</p>
                </div>
            })}
        </div>
    </section>
  )
}

export default Service