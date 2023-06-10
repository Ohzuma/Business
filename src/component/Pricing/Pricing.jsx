import React from 'react'
import Item from './PricingData'
const Pricing = () => {
  return (
   <div className="pricingSection">
  <header className="ServiceHeading">
            <h3 style={{width:'200px'}} className='intro'>our into video</h3>
            <h1>Pricing & Plans</h1>
            <p>
             There are many variations of passages of Lorem Ipsum
             available, but <br/> the majority have suffered alteration 
             in some form. 
             </p>
        </header>
<div className="priceList">
  {Item.map((item)=>{
    const{heading,desc,amount,btn,li1,li2,li3,li4} = item;
    return(
     <div className='pricing-box'>
      <div className="heading">
        <h1>{heading}</h1>
        <p>{desc}</p>
      </div>
      <div className="amount">
        
          <sup>$</sup>
          <span>{amount}</span>
          <sub>/mo</sub>
       
      </div>
      <button type='button'>{btn}</button>
      <ul>
        <li><span></span>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
      </ul>
     </div> 
    )
  })}
</div>

   </div>
  )
}

export default Pricing