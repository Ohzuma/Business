import React from 'react'
import VideoBg from "../../assets/image/video-bg.png";
import {AiFillPlayCircle} from 'react-icons/ai'

const WatchIntro = () => {
  return (
    <section className="watchIntro">
         <header className="ServiceHeading">
            <h3 className='intro'>our into video</h3>
            <h1>Watch Our Promo Video</h1>
            <p>
             There are many variations of passages of Lorem Ipsum
             available, but <br/> the majority have suffered alteration 
             in some form. 
             </p>
        </header>
        <div className="video">
          <img src={VideoBg} alt="intro" />
          <button type='button' className='watch-btn'>
  <AiFillPlayCircle/>
</button>
        </div>


    </section>
  )
}

export default WatchIntro