import React from 'react'
import Ti1 from '../../assets/image/team-1.jpg'
import Ti2 from '../../assets/image/team-2.jpg'
import Ti3 from '../../assets/image/team-3.jpg'

const Team = () => {
  return (
<section className="Team">
<header className="ServiceHeading">
    <h3 style={{width:'200px'}} className='intro'>our into video</h3>
    <h1>Pricing & Plans</h1>
    <p>
     There are many variations of passages of Lorem Ipsum
     available, but <br/> the majority have suffered alteration 
     in some form. 
     </p>
</header>
<div className="TeamBoxes"> 
     <div className='Team-box'>
     <div className="team-img">
    <img src={Ti1} alt="author-1" />
    </div>
     
     <div className="info">
      <div className="author-social">
      <span>hello </span>
        <span>hello </span>
        <span>hello </span>
      </div>
      <div className="author-name">
        <h3>Jeffery Riley</h3>
        <p>Art Director</p>
      </div>
     </div>
     </div> 

     <div className='Team-box'>
    <div className="team-img">
    <img src={Ti2} alt="author-2" />
    </div>
     
     <div className="info">
      <div className="author-social">
        <span>hello </span>
        <span>hello </span>
        <span>hello </span>
      </div>
      <div className="author-name">
        <h3>Jeffery Riley</h3>
        <p>Web Designer</p>
      </div>
     </div>
     </div> 

     <div className='Team-box'>
    <div className="team-img">
    <img src={Ti3} alt="author-3" />
    </div>
     
     <div className="info">
      <div className="author-social">
      <span>hello </span>
        <span>hello </span>
        <span>hello </span>
      </div>
      <div className="author-name">
        <h3>Jeffery Riley</h3>
        <p>UX Designer</p>
      </div>
     </div>
     </div> 
</div>

</section>
  )
}

export default Team