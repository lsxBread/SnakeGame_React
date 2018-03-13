import React from 'react'
import cn from 'classnames'
import immutable from 'immutable'
import { connect } from 'react-redux'

import {buttonDown, buttonUp} from '../../../actions/index'
import '../../../assets/css/Button.css'

class Button extends React.Component {
  constructor() {
    super()
    this.handleButtonDown = this.handleButtonDown.bind(this)
    this.handleButtonUp = this.handleButtonUp.bind(this)
  }

  handleButtonDown(e, btnType) {
    e.preventDefault()
    this.props.buttonDown(btnType)
  }

  handleButtonUp(e, btnType) {
    e.preventDefault()
    this.props.buttonUp(btnType)
  }

  shouldComponentUpdate(nextProps, nextState) {
    let {type} = this.props
    if(immutable.is(this.props.keyboard.get(type), nextProps.keyboard.get(type))) {
      return false
    } else {
      return true 
    }
  }

  render() {
    console.log('render')
    let { type, color, size, top, left, arrows, label, position } = this.props
    let active = this.props.keyboard.get(type)
    console.log(active)
    return (
      <div
        className='buttonWrapper'
        onMouseDown={(e)=>this.handleButtonDown(e,type)}
        onMouseUp={(e)=>this.handleButtonUp(e,type)}
        onTouchStart={(e)=>this.handleButtonDown(e,type)}
        onTouchEnd={(e)=>this.handleButtonUp(e,type)}
        style={{top: `${top}`, left: `${left}`}}
      >
        <div className={cn({ 'button': true, 'active': active, [`${size}`]: true, [`${color}`]: true })}>
          {
            size === 'small' || size === 'big'
            ? <i className={cn({'fa':true, [`fa-${label}`]:true, [`${position}`]: true })}></i>
            : null
          }
         
          {
            size === 'middle'
            ? <div className={cn({[`${arrows}`]: true})}></div>
            : null
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    keyboard: state.get('keyboard')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buttonDown: (btnType) => {
      dispatch(buttonDown(btnType))
    },
    buttonUp: (btnType) => {
      dispatch(buttonUp(btnType))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)


