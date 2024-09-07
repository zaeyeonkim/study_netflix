import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from 'react-bootstrap';
import "./Banner.style.css";

const Banner = () => {
    const { data, isLoading, error, isError } = usePopularMoviesQuery();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }
    return (
        <div
            style={{
                backgroundImage: `url(https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[0].poster_path})`,
            }}
            className='banner'
        >
            Banner
        </div>
    );
};

export default Banner;
