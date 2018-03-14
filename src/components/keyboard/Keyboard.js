import React from 'react'

import Button from './button/Button'
import '../../assets/css/Keyboard.css'
import * as actions from '../../unit/actionType'

export default class Keyboard extends React.Component {
  render() {
    return (
      <div className="keyboard">
        <Button
          color='green'
          size='small'
          position='bottom'
          label='pause'
          top='0'
          left='20px'
          type={actions.KEY_PAUSE}
        />
        <Button
          color='green'
          size='small'
          position='bottom'
          label='volume-up'
          top='0'
          left='100px'
          type={actions.KEY_MUSIC}
        />
        <Button
          color='red'
          size='small'
          position='bottom'
          label='redo'
          top='0'
          left='180px'
          type={actions.KEY_REPLAY}
        />
        <Button
          color='blue'
          size='big'
          position='bottom'
          label='play'
          top='120px'
          left='50px'
          type={actions.KEY_START}
        />
        <Button
          color='blue'
          size='middle'
          position='right'
          top='0px'
          left='380px'
          arrows='upArrow'
          type={actions.KEY_UP}
        /> 
        <Button
          color='blue'
          size='middle'
          position='bottom'
          top='100px'
          left='280px'
          arrows='leftArrow'
          type={actions.KEY_LEFT}
        />
        <Button
          color='blue'
          size='middle'
          position='bottom'
          top='100px'
          left='480px'
          arrows='rightArrow'
          type={actions.KEY_RIGHT}
        />
        <Button
          color='blue'
          size='middle'
          position='bottom'
          top='200px'
          left='380px'
          arrows='downArrow'
          type={actions.KEY_DOWN}
        />
      </div>
    )
  }
}