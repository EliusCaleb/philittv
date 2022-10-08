
import React,{useState,useEffect} from 'react';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';


const api ="https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1"
function App() {
    const [ movies,setMovies] = useState([]);
   

    useEffect(()=>{
        fetch(api)
        .then(resp=> resp.json())
        .then(data=>{
            console.log(data)
            setMovies(data.results)
        })
    },[])
    
  return (
    <div className='container'>
        <div className='grid'>
        {movies.map(singleMovie=>
          
        <MovieBox  key={singleMovie.id} {...singleMovie}/>
        )
   
    }
    </div>
    </div>
  )
}

export default App

