// import actions from '../actions/actions';
var actions = require('../actions/actions');

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
	console.log(actions);

	if (action.type === actions.FETCH_HELLO_SUCCESS) {

		//to fix Error: Objects are not valid as a React child (found: object with keys {title}). added action.message.title (added title)
		return {message: action.message.title};

	}

	else if (action.type === actions.FETCH_HELLO_ERROR) {
		console.log(action.error, 'action.error');
		return state;

	}





	return state;
}

