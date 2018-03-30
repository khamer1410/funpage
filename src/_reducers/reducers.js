export const level = (state = {level: 0}, action)=> {
  console.log(state, action);
  switch (action.type) {
    case 'LEVEL_UP':
      return {
        ...state,
        level: state.level + action.value,
      }

    case 'LEVEL_DOWN':
      return {
        ...state,
        level: state.level - action.value,
      }
    
    default:
      return state;
  }
}