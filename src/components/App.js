import React from 'react';
import BaseComponent from './base/Base'
import { connect } from 'react-redux'

import Decorate from './decorate/Decorate'
import Welcome from './Welcome/Welcome'
import Keyboard from './keyboard/Keyboard'
import Number from './Number/Number'
import Music from './Music/Music'
import Pause from './Pause/Pause'
import Matrix from './Matrix/Matrix'
import Food from './Food/Food'
import Snake from './Snake/Snake'
import { gameState } from '../unit/const'
import todo from '../todo/index'
import { buttonDown, buttonUp } from '../actions/index'
import '../assets/css/App.css';

class App extends BaseComponent {
  constructor() {
    super()
    this.state = {
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight,
    }
    this.keyPress = this.keyPress.bind(this)
    this.keyUp = this.keyUp.bind(this)
  }

  componentWillMount() {
    window.addEventListener('resize', this.resize.bind(this), true)
    document.addEventListener('keydown', this.keyPress)
    document.addEventListener('keyup', this.keyUp)
  }

  keyPress(e) {
    switch (e.code) {
      case 'ArrowUp':
        this.props.buttonDown('up')
        todo['up'].call()
        break
      case 'ArrowDown':
        this.props.buttonDown('down')
        todo['down'].call()
        break
      case 'ArrowLeft':
        this.props.buttonDown('left')
        todo['left'].call()
        break
      case 'ArrowRight':
        this.props.buttonDown('right')
        todo['right'].call()
        break
      case 'Space':
        if (this.props.game === gameState.start) {
          this.props.buttonDown('pause')
          todo['pause'].call()
        } else if (this.props.game === gameState.pause || this.props.game === gameState.welcome) {
          this.props.buttonDown('start')
          todo['start'].call()
        }
      default:
        return
    }
  }

  keyUp(e) {
    switch (e.code) {
      case 'ArrowUp':
        this.props.buttonUp('up')
        break
      case 'ArrowDown':
        this.props.buttonUp('down')
        break
      case 'ArrowLeft':
        this.props.buttonUp('left')
        break
      case 'ArrowRight':
        this.props.buttonUp('right')
      case 'Space':
        if (this.props.game === gameState.start) {
          this.props.buttonUp('start')
        } else if (this.props.game === gameState.pause) {
          this.props.buttonUp('pause')
        }
      default:
        return
    }
  }

  resize() {
    this.setState({
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight,
    })
  }
  render() {
    let title = ''
    if (this.props.game === gameState.welcome) {
      title = 'Welcome to SNAKE'
    } else {
      title = 'GAME OVER! RESTART!'
    }

    let filling = 0
    const size = (() => {
      const w = this.state.w
      const h = this.state.h
      let ratio = h / w
      let scale
      let position
      let css = {}
      if (ratio < 1.5) {
        scale = h / 960
      } else {
        scale = w / 640
        filling = (h - (960 * scale)) / scale / 2;
        css = {
          paddingTop: Math.floor(filling) + 42,
          paddingBottom: Math.floor(filling),
        };
      }
      position = (w > 640) ? 'center' : 'left'
      css['transform'] = position === 'left'
        ? `scale(${scale}) translateX(${(w - 640 * scale) / 2 / scale}px)`
        : `scale(${scale})`
      css['transformOrigin'] = `${position} top`
      return css;
    })();
    return (
      <div className='App' style={size}>
        <div className="key_space">SPACE: START / PAUSE</div>
        <div className='key_arrows'>
          <div className='top'>UP</div>
          <div className="bottom">LEFT</div>
          <div className="bottom">DOWN</div>
          <div className="bottom">RIGHT</div>
        </div>
        <div className="gameDisplay">
          <Decorate />
          <div className="displayBoarder">
            <div className="screen">
              {
                (this.props.game === gameState.welcome || this.props.game === gameState.gameover)
                && <Welcome title={title} />
              }
              <Matrix />
              {
                (this.props.game === gameState.start || this.props.game === gameState.pause)
                && <Food />
              }
              {
                (this.props.game === gameState.start || this.props.game === gameState.pause)
                && <Snake />
              }
              <div className="gameInfo">
                <Number numType='max' title='MAX' />
                <Number numType='score' title='SCORE' />
                <Number numType='speed' title='SPEED' />
                <div className="settingWrapper">
                  <div className='setting' >
                    <Music />
                    <Pause />
                  </div>
                  <div className="time">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="operation">
          <Keyboard />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    game: state.get('game')
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
