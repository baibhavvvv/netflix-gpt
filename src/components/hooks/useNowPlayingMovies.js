import { useDispatch } from "react-redux";
import { API_options } from "../../utils/constants"; 
import { useEffect } from "react";
import { addNowPlayingMovies } from "../../utils/moviesSlice";


const useNowPlayingMovies = () => {
    //fetching data from the tmdb api
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_options
    );
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies);
  }

  useEffect(() =>   {
    getNowPlayingMovies();
  },[])
}
export default useNowPlayingMovies;