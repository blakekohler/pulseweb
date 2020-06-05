



import React from "react"
import style from "./videoPlayer.module.scss"





const VideoPlayer = ({video, track}) => {
   
  return (
    <div className={style.videoHolder}
    >

<video className={style.responsiveVideo} autoPlay controls >
  <source src={video} type="video/mp4"/>
  <track src={track} kind="captions" srclang="en" label="English"/>
  Your browser does not support the video tag.
</video>
</div>
  )
}

export default VideoPlayer
