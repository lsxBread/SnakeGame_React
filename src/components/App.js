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
import '../assets/css/App.css';

class App extends BaseComponent {
  constructor() {
    super()
    this.state = {
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight,
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.resize.bind(this), true)
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
      title = 'GAME OVER'
    }
    
    let filling = 0
    const size = (() => {
      const w = this.state.w
      const h = this.state.h
      let ratio = h / w
      let scale
      let position
      let css = {}
      position = w > 640 ? 'center' : 'left'
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
      css['transform'] = `scale(${scale})`
      css['transformOrigin'] = `top ${position}`
      return css;
    })();
    return (
      <div className='App' style={size}>
        <div className="gameDisplay">
          <Decorate/>
          <div className="displayBoarder">
            <div className="screen">
              {
                (this.props.game === gameState.welcome ||  this.props.game === gameState.gameover)
                &&<Welcome title={title}/>
              }
              <Matrix />
              {
                (this.props.game === gameState.start || this.props.game === gameState.pause)
                &&<Food />
              }
              {
                (this.props.game === gameState.start || this.props.game === gameState.pause)
                &&<Snake />
              }
              <div className="gameInfo">
                <Number numType='max' title='MAX'/>
                <Number numType='score' title='SCORE'/>
                <Number numType='speed' title='SPEED'/>
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
          <Keyboard/>
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

export default connect(mapStateToProps, null)(App)
