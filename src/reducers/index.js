const initialState = {
  userName: '',
  userNameInvalidMsg: '',
  password: '',
  passwordInvalidMsg: '',
  dialogInvalidMsg: '',
  isLoginLoading: false,
  isLogin: false,
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        userName: action.payload,
        userNameInvalidMsg: '',
        dialogInvalidMsg: '',
      };
    case 'SET_USERNAME_INVALID_MSG':
      return {
        ...state,
        userNameInvalidMsg: action.payload,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
        passwordInvalidMsg: '',
        dialogInvalidMsg: '',
      };
    case 'SET_PASSWORD_INVALID_MSG':
      return {
        ...state,
        passwordInvalidMsg: action.payload,
      };
    case 'SET_DIALOG_INVALID_MSG':
      return {
        ...state,
        dialogInvalidMsg: action.payload,
      };
    case 'CLEAR_LOGIN_FORM':
      return {
        ...state,
        userName: '',
        userNameInvalidMsg: '',
        password: '',
        passwordInvalidMsg: '',
        dialogInvalidMsg: '',
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