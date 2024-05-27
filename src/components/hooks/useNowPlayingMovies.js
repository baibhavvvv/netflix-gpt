import { useDispatch } from "react-redux";
import { API_options } from "../../utils/constants"; 
import { useEffect } from "react";
import { addNowPlayingMovies } from "../../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            dispatch(addNowPlayingMovies(json.results)); // Ensure that this matches your action creator's expected payload
        } catch (error) {
            console.error("Failed to fetch movies:", error);
        }
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;
