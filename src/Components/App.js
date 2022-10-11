
import React,{useState,useEffect} from 'react';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar,nav } from 'react-bootstrap';


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
    <>

    
    <div className='container'>
        <div className='grid'>
        {movies.map(singleMovie=>
          
        <MovieBox  key={singleMovie.id} {...singleMovie}/>
        )
    
    }
    </div>
    </div>
    
    
    
    </>
    
  )
}

export default App;


/*
<Navbar bg='dark'   expand='1g' variant='dark'>
      <Container   fluid>
       <Navbar.Brand href=''>MovieDB App</Navbar.Brand>
       <Navbar.Brand href=''>Trending</Navbar.Brand>
       <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>

       <Navbar.Collapse id='navbarScroll'>
        <nav className='me-auto my-2 my-1g-3'>
          style={{maxHeight:'100px'}}
          navbarScroll>
        </nav>
       </Navbar.Collapse>
      </Container>




    </Navbar>
    */

