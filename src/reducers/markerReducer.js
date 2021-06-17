export const markersInitialState = {
  markersList: [],
  makrer: {},
};

export const markerReducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        markersList: action.markersList,
      };
    case "ADD":
      return {
        ...state,
        markersList: [...state.markersList, action.newMarker],
      };
    default: {
      return state;
    }
  }
};
