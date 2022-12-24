import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards";
import "./CommonPage.css";

function CommonPage() {
  const { type } = useParams();
  console.log("useParams", type);

  const [popularMovies, setPopularMovies] = useState([]);



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${type}?api_key=44c5829267abe8da62cdffe0a8aa9a79&language=en-US&page=1`
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, [type]);

  return (
    <>
    <Grid style={{display:"flex",backgroundColor:"black",justifyContent:"center"}}>
    <Typography style={{color:"white",padding:"10px",fontSize:"30px",fontWeight:700}}>{type==="popular" ? "POPULAR" : type==="top_rated" ? "TOP RATED" : type==="upcoming" ? "UPCOMING" : null}</Typography>
    </Grid>
    <Grid style={{padding:"20px",backgroundColor:"black",display:"flex",justifyContent:"center"}} container>

      {popularMovies.map((movie) => {
        return <Cards movie={movie} />;
      })}
    </Grid>
    </>
  );
}

export default CommonPage;
