export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case "types.SET_USER_INFO": {
      return Object.assign({}, state, {
        info: {},
        authorization: {},
        isExpired: false,
      });
    }
    default:
      return state;
  }
}
