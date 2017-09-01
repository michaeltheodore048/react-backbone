const AUTH_LOGIN_START = 'auth/login/start';
const AUTH_LOGIN_SUCCESS = 'auth/login/success';
const AUTH_LOGIN_FAILED = 'auth/login/failed';

const initialState = {
  isFetching: false,
  requestId: null,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_START: {
      localStorage.clear();
      return Object.assign({}, state, {
        isFetching: true,
      });
    }

    case AUTH_LOGIN_SUCCESS: {
      localStorage.token = 'this is token';
      localStorage.requestId = 'this is request id';

      return Object.assign({}, state, {
        isFetching: false,
      });
    }

    case AUTH_LOGIN_FAILED: {
      localStorage.clear();
      return Object.assign({}, state, {
        isFetching: false,
        message: 'Login failed',
      });
    }

    default:
      return state;
  }
};
