import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel'; // Owl Carousel bileşeni
import img from '../../img/resim.png';
import './ContentMovieCarousel.css'

interface IMovie {
  id: number;
  poster_path: string; 
  title: string;
  overview: string;
}

function ContentMovieCarousel() {

  const [movies, setMovie] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetching the popular movies
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=d2dc061d80b2b9d1b068f6c108f2c30e'
        );
        const data = await response.json();

        // Extracting movie data from the response
        const moviesData: IMovie[] = data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 
          overview: movie.overview,
        }));

        setMovie(moviesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>
                Popüler <span>Filmler</span>
              </h2>
              <div className="line-dec" style={{ width: '150px' }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
          {loading ? (
              <div className="loading-message">Yükleniyor...</div> 
            ) : (
              <OwlCarousel className="owl-carousel" {...options}>
                {movies.map((movie) => (
                  <div className="item" key={movie.id}>
                    <img  className="movie-poster" src={movie.poster_path} alt={movie.title} />
                    <hr />
                    <h4 className='ms-4'>{movie.title}</h4>
                  </div>
                ))}
              </OwlCarousel>
            )}
           

        </div>
      </div >
    </div >
    </>
  );
}

export default ContentMovieCarousel;
