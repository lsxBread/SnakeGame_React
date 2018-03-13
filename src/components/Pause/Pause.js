import React from 'react'
import {connect} from 'react-redux'
import cn from 'classnames'

import '../../assets/css/Pause.css'

class Pause extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.pause === nextProps.pause) {
      return false
    } else {
      return true
    }
  }
  render() {
    let active = this.props.pause
    console.log('render')
    return (
        <div className={cn('pause',{'active': active})}></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pause: state.get('pause'),
  }
}

export default connect(mapStateToProps, null)(Pause)
