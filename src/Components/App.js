
import React, { useState, useEffect } from 'react';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


const api_key = "https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1"
//const api_search = "https://api.themoviedb.org/3/search/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1&query"
function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuerry] = useState('');


  useEffect(() => {
    fetch(api_key)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      })
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log('searching');
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results)
    }
    catch (e) {
      console.log(e)
    }
  }


  const handleChange = (e) => {
    setQuerry(e.target.value)
  }
  return (
    <>
      <Navbar bg='dark' expand='lg' variant='dark'>
        <Container fluid>
          <Navbar.Brand href='/home'>MovieDB App</Navbar.Brand>
          <Navbar.Brand href='/home'>Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>

          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-1g-3'
              style={{ maxHeight: '100px' }}
              navbarScroll>
            </Nav>

            <Form className='d-flex' onSubmit={searchMovie}>
              <FormControl
                type='search'
                placeholder='Movie Search'
                className='me-2'
                aria-label='search'
                name='query'
                value={query}
                onChange={handleChange}>
              </FormControl>
              <Button variant='secondary' type='submit'>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div>
        {movies.length > 0 ? (<div className='container'>
          <div className='grid'>
            {movies.map(singleMovie =>

              <MovieBox key={singleMovie.id} {...singleMovie} />
            )

            }
          </div>
        </div>


        ) : (
          <h2> Sorry !!!No Movie Found</h2>
        )}
      </div>

    </>

  );
}

export default App;




