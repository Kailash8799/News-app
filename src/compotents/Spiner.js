import React, { Component } from 'react'
import Loading from './loading.gif'

export class Spiner extends Component {
  render() {
    return (
        <div className='text-center'>
      <img src={Loading} alt="Loading"/>
      </div>
    )
  }
}

export default Spiner