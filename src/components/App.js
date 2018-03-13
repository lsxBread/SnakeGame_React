import React from 'react';
import BaseComponent from './base/Base'

import Decorate from './decorate/Decorate'
import Keyboard from './keyboard/Keyboard'
import Number from './Number/Number'
import Music from './Music/Music'
import Pause from './Pause/Pause'
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
    let filling = 0;
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

export default App;
