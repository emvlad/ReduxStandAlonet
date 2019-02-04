export default function(state = null, action) {
  switch (action.type) {
    case "USER_TOOLTIPS":
      return action.payload;
      break;
  }
  return state;
}
