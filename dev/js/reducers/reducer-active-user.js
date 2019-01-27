//NB: Switch all main actions like listeners created in index-actions
export default function(state = null, action) {
  switch (action.type) {
    case "USER_SELECTED":
      return action.payload;
      break;
  }
  return state;
}

//will be imported in this ./reducers-index
