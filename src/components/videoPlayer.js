



import React, { useState } from "react"
import style from "./videoPlayer.module.scss"





const VideoPlayer = ({video}) => {
   
  return (
    <div className={style.videoHolder}
    >

<video className={style.responsiveVideo} autoPlay controls >
  <source src={video} type="video/mp4"/>
  Your browser does not support the video tag.
</video>
</div>
  )
}

export default VideoPlayer
