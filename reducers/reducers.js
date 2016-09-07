import actions from '../actions/actions';

var initialGameState = {
	message: "hello from redux initial state"

};

//active libraries reducer
export function mainReducer(state, action) {
	state = state || initialGameState;
	// // if(action.type === actions.SELECTED_LIBRARY) {
	// // 	return payload.library;

	// }

	// if(action.type === actions.UNSELECTED_LIBRARY) {
	// 	return payload.library;

	// }

	if (action.type === actions.FETCH_HELLO_SUCCESS) {
		return {message: action.message};

	}

	else if (action.type === actions.FETCH_HELLO_ERROR) {
		console.log(action.error);
		return state;

	}





	return state;
}

