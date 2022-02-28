import React from 'react'
import '../Styles/VideoCard.css'
const VideoCard = ({image,name,index}) => {
    return (
        <div className='VideoCard' style={{backgroundImage: `url(${image})`}}>
           <a href='/#'><i className="fa fa-play"></i></a> 
           <p>{name}</p>
        </div>
    )
}

export default VideoCard
