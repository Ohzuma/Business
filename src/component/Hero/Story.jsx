import React from 'react'
import { useState } from 'react';
import AboutImg from '../../assets/image/about-img1.jpg'
import StroyData from './StoryData'
const Story = () => {
  const [data,setData] = useState(StroyData);
const [value,setValue] = useState(0)

const {description}=data[value]


  return (
  <section className='story'>

<div className="story-container">
  <div className="Slh">
<img src={AboutImg} alt="About Us" />
  </div>
  <div className="Srh">
<div className="Srh-heading">
  <h3>OUR STORY</h3>
  <h1>Our team comes with the experience and knowledge</h1>
</div>

<div className="faq-section">
  <div className="btn-containner">
    {
      data.map((item,index)=>{
        return <button key={item.id} onClick={()=> setValue(index)} type='button' className={`${index === value && 'active'} `}>
          {item.title}
        </button>
      })
    }
  </div>
 <main>
 <p>{description}</p>
 </main>
</div>

  </div>
</div>

  </section>
  )
}

export default Story