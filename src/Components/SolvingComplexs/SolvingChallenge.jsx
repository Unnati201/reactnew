import React from 'react';
import "./Solvings.scss"

const SolvingChallenge = () => {
  return (
    
        
        <div className='Solving-video'>
        <h2 className='solving-h2-text'>Solving Complex Challenges</h2>
        <p className='solving-challenge-p'>In today’s hyper-connected world and  uncertain times,  organizations </p>
        <p className='solving-sec-p'>are  challenged in more ways than ever</p>
        <video
                  className='solving-video-wrapp'
                  src="rgs-img/solvingvideo.mp4"
                  muted
                  playsInline
                  autoPlay
                  loop
                ></video>
                </div>

    
  )
}

export default SolvingChallenge;
