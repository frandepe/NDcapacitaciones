import { privatePostRequest } from "../services/privateApiServices";

const defaultValue = {
  infoUser: {},
  token: null,
  loading: false,
  error: false,
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const LOADING = "LOADING";
const ERROR = "ERROR";

export default function LoginReducer(state = defaultValue, { type, payload }) {
  switch (type) {
    case LOGIN:
      return { ...state, infoUser: payload, error: false };
    case LOGOUT:
      return defaultValue;
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
}

export const loginAction =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await privatePostRequest("login", {
        email,
        password,
      });

      dispatch({
        type: LOGIN,
        payload: response,
        token: localStorage.setItem("token", response.token),
      });
    } catch (error) {
      console.log("Error:", error);

      dispatch({
        type: ERROR,
      });
    } finally {
      dispatch({
        type: LOADING,
      });
    }
  };
