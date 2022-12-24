import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Grid} from '@mui/material';

import "./Home.css"
import {Link} from "react-router-dom"
import { Star } from '@mui/icons-material';



function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

function ImageCarousel({imageData}) {
   
  return (
    <Grid>
        <Carousel 
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >
{imageData.map((value)=>{
    return (
        <Link style={{textDecoration:"none"}} to={`movie/${value.id}`}>
            <Grid style={{position:"relative"}} container>
                <img className='image_poster' alt="Movie Poster" src={`https://image.tmdb.org/t/p/original${value && value.backdrop_path}`}/>
                <Grid className="main_container">
                    <Grid className='content_box'>

                
                    <Grid textAlign="left" style={{color:"white"}}><span className="original_title">{truncateString(value?.original_title,16) || "N.A."}</span></Grid>
                    <Grid textAlign="left" style={{color:"white"}}><span className="release_date">{value?.release_date  || "N.A."}</span><span className="vote_average">{value?.vote_average}<Star/></span></Grid>
                    <Grid textAlign="left" ><div className="overview">{truncateString(value?.overview,150) || " "}</div></Grid>
                    </Grid>

                </Grid>
            </Grid>

        </Link>
    )
})}

        </Carousel>
    </Grid>
  )
}

export default ImageCarousel