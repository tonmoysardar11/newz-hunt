import React from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const NewzItem = (props) => {

  //   static propTypes = {

  //   }

  let { title, desc, imgUrl, newsUrl, date, author } = props;
  return (
    <div className="card my-2 mx-auto" style={{ width: '20rem' }}>
      <span class="d-flex justify-content-flex-end badge rounded-pill bg-success" style={{ position: 'absolute', right: 0 }}>
        {author}
      </span>
      <img src={imgUrl} className="card-img-top" style={{ height: '10em' }} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <br />
        <p className='card-text'>

          <u>By {author} Dated: {date}</u>
        </p>

        <br />
        <Link to={newsUrl} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}><p className="card-text">{desc}</p>
          <br />
          <b>Read Full News</b></Link>
      </div>
    </div>
  )
}

export default NewzItem
