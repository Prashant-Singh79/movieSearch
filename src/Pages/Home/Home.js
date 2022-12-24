import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Grid } from '@mui/material';
import ImageCarousel from './ImageCarousel';
import Cards from '../../CommonComponent/Cards/Cards';

function Home() {
    const [popularMovies,setPopularMovies] = useState([])

    async function fetchData() {
        try {
          const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=44c5829267abe8da62cdffe0a8aa9a79&language=en-US&page=1")
          setPopularMovies(response.data.results)
        } catch (error) {
          console.error(error);
        }
      }
    
      useEffect(() => {
        fetchData();
      },[])

console.log("popluarMovies",popularMovies)



  return (
    <Grid style={{backgroundColor:"black",display:"flex",justifyContent:"center"}} container>
      <ImageCarousel imageData={popularMovies}/>
      
      {
popularMovies.map((data)=>{
  return <Cards movie={data}/>
})
      }
    </Grid>
  )
}

export default Home