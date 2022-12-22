const changeText = (state, action) => {
  state[action.receiver] = {...state[action.receiver]}
  state[action.receiver].currentText = action.text;
  return state;
}

export default changeText;
