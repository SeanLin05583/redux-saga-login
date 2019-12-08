const initialState = {
  userName: '',
  password: '',
  isLoginLoading: false,
  isLogin: false,
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        userName: action.payload,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    case 'SET_LOGIN_LOADING':
      return {
        ...state,
        isLoginLoading: true,
      };
    case 'UNSET_LOGIN_LOADING':
      return {
        ...state,
        isLoginLoading: false,
      };
    case 'LOG_IN':
      return {
        ...state,
        isLogin: true,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLogin: false,
      };
    case 'CANCEL_LOGIN':
      return {
        ...state,
        isLoginLoading: false,
      };
    default:
      return state;
  }
}

export default appReducer;