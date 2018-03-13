import React from 'react'
import '../../assets/css/Decorate.css'

export default class Decorate extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <div className='decorate'>
        <div className="title">
          <h1>Snake</h1>
        </div>
        <div className="topBorder">
          <span className='left-move' style={{ width: 40 }}></span>
          <span className='left-move'></span>
          <span className='left-move'></span>
          <span className='left-move'></span>
          <span className='left-move'></span>
          <span className='right-move' style={{ width: 40 }}></span>
          <span className='right-move'></span>
          <span className='right-move'></span>
          <span className='right-move'></span>
          <span className='right-move'></span>
        </div>
        <div className="leftDecorate">
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <p></p>
          <p></p>
          <p></p>
          <b></b>
        </div>
        <div className="rightDecorate">
          <b></b>
          <p></p>
          <p></p>
          <p></p>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
          <b></b>
        </div>

      </div>


    )
  }

}