import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from '../reducers/index'
import {loadState, saveState} from '../unit/localstorage'

const persistedState = loadState()
const store = createStore(
  rootReducers,
  persistedState,
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

store.subscribe(() => {
  saveState(store.getState().toJS())
})

export default store;