import { Grid, Skeleton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards({ movie }) {
  console.log("moviesTrend", movie);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <>
      <Link
        to={`/movie/${movie.id}`}
        style={{ textDecoration: "none", color: "white",paddingTop:"20px" }}
      >
        <div className="cards">
          {!loading ? (
            <Skeleton
              sx={{ bgcolor: "grey" }}
              variant="rounded"
              col
              style={{height:"300px",width:"250px"}}
            />
          ) : (
            <>
              <img
                className="cards__img"
                src={`https://image.tmdb.org/t/p/original${
                  movie ? movie.poster_path : ""
                }`}
              />
              <div className="cards__overlay">
                <div className="card__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="card__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="card__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="card__description">
                  {movie ? movie.overview.slice(0, 118) + "..." : ""}
                </div>
              </div>
            </>
          )}
        </div>
      </Link>
    </>
  );
}

export default Cards;