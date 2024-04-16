import React from 'react'
import { useSelector } from 'react-redux'
import Videobackground from './Videobackground'
import Videotitle from './Videotitle'

//getting the data from the redux store
const Maincontainer = () => {
    const movies = useSelector((store) =>  store.movies?.nowplayingmovies)

    if(!movies) return;
    const mainmovie = movies[0];
    console.log(mainmovie);
    const {original_title,overview} = mainmovie;
  return (
    <div>
      <Videotitle title = {original_title} overview={overview}/>
      <Videobackground />
    </div>
  )
}

export default Maincontainer;
