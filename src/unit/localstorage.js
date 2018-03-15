import immutable from 'immutable'
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('snake-game')
    if (serializedState === null) {
      return undefined
    }
    return immutable.fromJS(JSON.parse(serializedState))
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('snake-game', serializedState)
  } catch (err) {
    //Ignore write errors 
  }
}