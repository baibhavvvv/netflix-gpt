import Header from './Header'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer />
    </div>
  )
}

export default Browse;
