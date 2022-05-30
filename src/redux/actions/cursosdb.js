import { getDataMethodPrivate } from "../../services/privateApiServices";

const defaultValue = {
  cursosInfo: [],
  loading: false,
};

const CURSOS = "CURSOS";
const LOADING = "LOADING";

export default function CursosReducer(state = defaultValue, { type, payload }) {
  switch (type) {
    case CURSOS:
      return {
        ...state,
        cursosInfo: payload.cursosInfo,
        error: false,
        loading: false,
      };
    case LOADING:
      return { ...state, loading: true };
    default:
      return defaultValue;
  }
}

export const cursosAction = () => async (dispatch) => {
  try {
    const response = await getDataMethodPrivate("cursos");
    const data = response?.data;
    console.log(data);
    dispatch({
      type: CURSOS,
      payload: { cursosInfo: data },
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({
      type: LOADING,
    });
  }
};
