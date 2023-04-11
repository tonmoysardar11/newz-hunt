import React, { Component } from 'react'
import spin from '../media/spin.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spin} alt="" />
      </div>
    )
  }
}

export default spin
