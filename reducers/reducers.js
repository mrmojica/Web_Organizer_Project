import actions from '../actions/actions';


//active libraries reducer
export function mainReducer(state, action) {
	state = state || initialGameState;
	if(action.type === actions.SELECTED_LIBRARY) {
		return payload.library;

	}

	// if(action.type === actions.UNSELECTED_LIBRARY) {
	// 	return payload.library;

	// }

	return state
}