import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export class Navbar extends Component {
    //   static propTypes = {

    //   }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-dark "data-bs-theme="dark" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewzHunt</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:'25vw'}}>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active" aria-current="page" to="/Business">Business</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active" aria-current="page" to="/Entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active" aria-current="page" to="/Technology">Technology</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active" aria-current="page" to="/Sports">Sports</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active" aria-current="page" to="/Health">Health</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
