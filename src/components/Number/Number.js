import React from 'react'
import {connect} from 'react-redux'
import cn from 'classnames'

import '../../assets/css/Number.css'
import {numberToClass} from '../../unit/splitNumber.js'

class Number extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props[this.props.numType] === nextProps[this.props.numType]) {
      return false
    } else {
      return true
    }
  }
  render() {
    let number = this.props[this.props.numType]
    let classList = numberToClass(number)
    return (
      <div className="numberDisplay">
        <p>{this.props.title}</p>
        <div className="numbers">
          <span className={cn('number',{[`${classList[0]}`]: true})}></span>
          <span className={cn('number',{[`${classList[1]}`]: true})}></span>
          <span className={cn('number',{[`${classList[2]}`]: true})}></span>
          <span className={cn('number',{[`${classList[3]}`]: true})}></span>
          <span className={cn('number',{[`${classList[4]}`]: true})}></span>
          <span className={cn('number',{[`${classList[5]}`]: true})}></span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    max: state.get('max'),
    score: state.get('score'),
    speed: state.get('speed')
  }
}

export default connect(mapStateToProps, null)(Number)
