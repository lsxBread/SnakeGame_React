import React from 'react'
import uuidv1 from 'uuid/v1'

import '../../assets/css/Matrix.css'

class Matrix extends React.Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    var cells = []
    for (let i=0; i<200; i++) {
      cells.push(<div className='cell' key={uuidv1()} ></div>)
    }
    return (
      <div className="matrix clearfix">
        {cells}
      </div>
    )
  }
}

export default Matrix