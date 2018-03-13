import React from 'react'
import {connect} from 'react-redux'

import {addSpeed, resetSpeed} from '../actions/index'
import store from '../store/index'

const up = () => {
  console.log(store.getState())
  store.getState().get('speed') === 9 
    ? store.dispatch(resetSpeed()) 
    : store.dispatch(addSpeed())
}

export default up