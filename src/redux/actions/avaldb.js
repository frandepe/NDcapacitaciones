import { getDataMethodPrivate } from "../../services/privateApiServices";

const defaultValue = {
  avalInfo: [],
  loading: false,
};

const AVAL = "AVAL";
const LOADING = "LOADING";

export default function AvalReducer(state = defaultValue, { type, payload }) {
  switch (type) {
    case AVAL:
      return {
        ...state,
        avalInfo: payload.avalInfo,
        error: false,
        loading: false,
      };
    case LOADING:
      return { ...state, loading: true };
    default:
      return defaultValue;
  }
}

export const avalAction = () => async (dispatch) => {
  try {
    const response = await getDataMethodPrivate("aval");
    const data = response?.data;
    dispatch({
      type: AVAL,
      payload: { avalInfo: data },
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({
      type: LOADING,
    });
  }
};
