const GET_USERS_FROM_API_REQUEST = 'GET_USERS_FROM_API_REQUEST';
const GET_USERS_FROM_API_SUCCESS = 'GET_USERS_FROM_API_SUCCESS';
const GET_USERS_FROM_API_FAILURE = 'GET_USERS_FROM_API_FAILURE';

// actions
const get_users_request = () => ({type: GET_USERS_FROM_API_REQUEST});
const get_users_success = data => ({type: GET_USERS_FROM_API_SUCCESS, payload: data});
const get_users_failed = () => ({type: GET_USERS_FROM_API_FAILURE});

export const getUsers = () => {
    return async function(dispatch) {
        dispatch(get_users_request());
        const response = await fetch('https://randomuser.me/api/?results=10');
        if (response.ok) {
            const data = await response.json();
            dispatch(get_users_success(data.results));
        } else {
            dispatch(get_users_failed());
            // console.error("Error occured! See response: ", response);
        }
    }
}

const INITIAL_STATE = {
    users: [],
    isLoading: false,
    isError: false
}

// reducer sets state by the actions
export default function usersReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_USERS_FROM_API_REQUEST:
            return ({ ...state,
                isLoading: true,
                isError: false}
                );
        case GET_USERS_FROM_API_SUCCESS:
            return ({ ...state,
                users: action.payload,
                isLoading: false,
                isError: false}
                );
        case GET_USERS_FROM_API_FAILURE:
            return ({ ...state,
                isLoading: false,
                isError: true}
                );
        default:
            return state;
    }
}