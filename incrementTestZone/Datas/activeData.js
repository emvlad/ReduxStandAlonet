//NB: Switch all main actions like listeners created in index-actions
export default function(state = null, action) {
  switch (action.type) {
    case "DATA_SELECTED":
      return action.payload;
      break;
  }
  return state;
}
