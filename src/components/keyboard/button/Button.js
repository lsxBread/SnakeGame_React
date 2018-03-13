import React from 'react'
import cn from 'classnames'
import immutable from 'immutable'
import { connect } from 'react-redux'

import todo from '../../../todo/index'
import {buttonDown, buttonUp} from '../../../actions/index'
import '../../../assets/css/Button.css'

class Button extends React.Component {
  constructor() {
    super()
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
  }

  handleMouseDown(e, btnType) {
    this.props.buttonDown(btnType)
  }

  handleMouseUp(e, btnType) {
    this.props.buttonUp(btnType)
  }
  
  handleTouchStart(e, btnType) {
    e.preventDefault();
    this.props.buttonDown(btnType)
    todo.up()
  }

  handleTouchEnd(e, btnType) {
    e.preventDefault(); 
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
    let { type, color, size, top, left, arrows, label, position } = this.props
    let active = this.props.keyboard.get(type)
    return (
      <div
        className='buttonWrapper'
        onTouchStart={(e)=>this.handleTouchStart(e,type)}
        onTouchEnd={(e)=>this.handleTouchEnd(e,type)}
        onMouseDown={(e)=>this.handleMouseDown(e,type)}
        onMouseUp={(e)=>this.handleMouseUp(e,type)}
        onMouseLeave={(e)=>this.handleMouseUp(e,type)}
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


