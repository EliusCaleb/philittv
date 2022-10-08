import React from 'react';
import { Modal, ModalTitle } from 'react-bootstrap'
const API_IMG = "https://image.tmdb.org/t/p/w500/";
function MovieBox({ title, poster_path, vote_average, release_date,overview }) {
  console.log(overview)
  return (
    <div className='card text-center bg-secondary mb-3'>
      <div className='card-body'>
        <img className='card-img-top' src={API_IMG + poster_path} />
        <div className='card-body'>
          <button type='button' className='btn btn-dark'>View More</button>
          <Modal>
            <Modal.Header closeButton>
              <ModalTitle></ModalTitle>
            </Modal.Header>
            <Modal.Body>
              <img className='card-img-top' src={API_IMG + poster_path} />
              <h3>{title}</h3>
              <h4>imDB:{vote_average}</h4>
              <h5>Release Date:{release_date}</h5>
              <br></br>
              <h6>Overview</h6>
              <p>{overview}</p>

            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default MovieBox