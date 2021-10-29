const GET_USERS_FROM_API_REQUEST = 'GET_USERS_FROM_API_REQUEST';
const GET_USERS_FROM_API_SUCCESS = 'GET_USERS_FROM_API_SUCCESS';
const GET_USERS_FROM_API_FAILURE = 'GET_USERS_FROM_API_FAILURE';
const SAVE_TEMP_USERS_IN_GLOBAL_STATE = 'SAVE_TEMP_USERS_IN_GLOBAL_STATE';
const SAVE_LOCAL_USERS_IN_GLOBAL_STATE = 'SAVE_LOCAL_USERS_IN_GLOBAL_STATE';
const RESET_USERS_FROM_STATE = 'RESET_USERS_FROM_STATE';

// actions
const get_users_request = () => ({type: GET_USERS_FROM_API_REQUEST});
const get_users_success = data => ({type: GET_USERS_FROM_API_SUCCESS, payload: data});
const get_users_failed = () => ({type: GET_USERS_FROM_API_FAILURE});
const reset_users_from_state = () => ({type: RESET_USERS_FROM_STATE});
const save_temp_users_in_global_state = () => ({type: SAVE_TEMP_USERS_IN_GLOBAL_STATE});
const save_local_users_in_global_state = data => ({type: SAVE_LOCAL_USERS_IN_GLOBAL_STATE, payload: data});

export const saveLocalUsers = localUsers => {
    return function(dispatch) {
        dispatch(save_local_users_in_global_state(localUsers));
        // dispatch(save_temp_users_in_global_state());
    }
}

export const resetUsers = () => {
    return function(dispatch) {
        dispatch(reset_users_from_state());
    }
}

export const getRandomUsers = () => {
    return async function(dispatch) {
        dispatch(get_users_request());
        const response = await fetch(`https://randomuser.me/api/?results=10`);
        if (response.ok) {
            // reset current users
            dispatch(reset_users_from_state());
            const data = await response.json();
            // get new users
            dispatch(get_users_success(data.results));
            // save to state
            dispatch(save_temp_users_in_global_state());
        } else {
            dispatch(get_users_failed());
        }
    }
}

export const getUsers = (amount) => {
    return async function(dispatch) {
        dispatch(get_users_request());
        const response = await fetch(`https://randomuser.me/api/?results=${amount}`);
        if (response.ok) {
            const data = await response.json();
            dispatch(get_users_success(data.results));
            dispatch(save_temp_users_in_global_state());
        } else {
            dispatch(get_users_failed());
        }
    }
}

const INITIAL_STATE = {
    users: [],
    tempUsers: [],
    isLoading: false,
    isError: false
}

// reducer sets state by the actions
export default function usersReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SAVE_LOCAL_USERS_IN_GLOBAL_STATE:
            return { ...state,
                users: action.payload
            };
        case SAVE_TEMP_USERS_IN_GLOBAL_STATE:
            return {...state,
                users: [...state.users, ...state.tempUsers]
            };
        case RESET_USERS_FROM_STATE:
            return {...state,
                users: [],
                tempUsers: [],
                isLoading: false,
                isError: false
            };
        case GET_USERS_FROM_API_REQUEST:
            return { ...state,
                isLoading: true,
                isError: false
            };
        case GET_USERS_FROM_API_SUCCESS:
            return { ...state,
                tempUsers: action.payload,
                isLoading: false,
                isError: false
            };
        case GET_USERS_FROM_API_FAILURE:
            return { ...state,
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
}