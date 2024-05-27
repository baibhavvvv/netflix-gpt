import React from 'react'
import { useSelector } from 'react-redux'
import Videobackground from './Videobackground'
import Videotitle from './Videotitle'

const Maincontainer = () => {
    const movies = useSelector((store) => store.movies?.nowplayingmovies);
    
    // Display a loading message if movies are not yet available
    if (!movies || movies.length === 0) return <div>Loading movies...</div>;

    const mainmovie = movies[0];
    const { original_title, overview } = mainmovie;

    return (
        <div>
            <Videotitle title={original_title} overview={overview} />
            <Videobackground />
        </div>
    );
}

export default Maincontainer;
