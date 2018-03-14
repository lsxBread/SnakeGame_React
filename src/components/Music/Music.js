import React from 'react'
import {connect} from 'react-redux'
import cn from 'classnames'

import '../../assets/css/Music.css'

class Music extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.music === nextProps.music) {
      return false
    } else {
      return true
    }
  }
  render() {
    let active = this.props.music
    return (
        <div className={cn('music',{'active': active})}></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    music: state.get('music'),
  }
}

export default connect(mapStateToProps, null)(Music)
