//action creator

//check item
export const SELECTED_LIBRARY = 'SELECTED_LIBRARY';
export function selectLibrary(library) {
	return {
		type: 'SELECTED_LIBRARY',
		payload: library
	};
}

//uncheck item
// export const UNSELECTED_LIBRARY = 'UNSELECTED_LIBRARY';
// export function unselectLibrary(library) {
// 	return {
// 		type: 'UNSELECT_LIBRARY',
// 		payload: library
// 	}
// }

var FETCH_HELLO_SUCCESS = 'FETCH_HELLO_SUCCESS';
var fetchHelloSuccess = function(message) {
    return {
        type: FETCH_HELLO_SUCCESS,
        message: message,
        
    };
};

var FETCH_HELLO_ERROR= 'FETCH_HELLO_ERROR';
var fetchHelloError = function(message, error) {
    return {
        type: FETCH_HELLO_ERROR,
        error: error
    };
};

exports.FETCH_HELLO_SUCCESS = FETCH_HELLO_SUCCESS;
exports.fetchHelloSuccess = fetchHelloSuccess;
exports.FETCH_HELLO_ERROR = FETCH_HELLO_ERROR;
exports.fetchHelloError = fetchHelloError;