import * as ActionType from '../ActionTypes';

const initialState = {
    loading: false,
    error: false,
    list: [],
};

export default (state = initialState, { type, payload }: { type: string; payload: any }) => {
    switch (type) {
        case ActionType.PROJECTS_LOADING:
            return { ...state, loading: true };

        case ActionType.PROJECTS_LOADED:
            return { ...state, loading: false };

        case ActionType.PROJECTS_LOADED_ERROR:
            return { ...state, loading: false, error: true };

        case ActionType.SET_PROJECTS:
            return { ...state, list: payload, error: false, loading: false };

        default:
            return state;
    }
};
