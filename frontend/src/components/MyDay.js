import React, { useEffect, useState } from 'react'
import "./myday.css"
import { Link } from 'react-router-dom'


const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+crossfit&per_page=66&page=1"

export const MyDay = () => {
  const [photos, setPhotos] = useState([])
  
  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setPhotos(json.photos)
        console.log(json)
      })
  }, [])


// function goBack() {
//     window.history.back();
//   }

    return (
        
        <div className="myDayContainer">
            {photos.map((photo) => (
                <div className="myDayPhoto" key={photo.id}>
                    <Link to={`/photos/${photo.id}`}>
                    {/* <div className="Date">
                        <h1>{photo.original_title}</h1>
                        <p>Released {photo.release_date}</p>
                    </div> */}
                    
                        {/* <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />   */}
                    </Link>
                </div>
            ))}
        </div>
    )
}
// export const MyDay = () => {
//     const [photos, setPhotos] = useState([])

// useEffect(() => {
//     fetch('https://api.themoviedb.org/3/movie/popular?api_key=3812b9925d12c2723ac148f3607b8bb5&language=en-US&page=1')
//     fetch('https://api.themoviedb.org/3/movie/popular?api_key=3812b9925d12c2723ac148f3607b8bb5&language=en-US&page=1')
//         .then((res) => res.json())
//         .then((json) => {
//             setPhotos(json.results)
//         })
// }, [])

// function goBack() {
//     window.history.back();
//   }

//     return (
        
//         <div className="movieContainer">
//             {movies.map((movie) => (
//                 <div className="moviePoster" key={movie.id}>
//                     <Link to={`/movies/${movie.id}`}>
//                     <div className="titleRelease">
//                         <h1>{movie.original_title}</h1>
//                         <p>Released {movie.release_date}</p>
//                     </div>
                    
//                         <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />  
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     )
// }
