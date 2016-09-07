//action creator
require('isomorphic-fetch');


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
var fetchHelloError = function(error) {
    return {
        type: FETCH_HELLO_ERROR,
        error: error
    };
};

var fetchData = function() {
   return function(dispatch) {
       var url = 'http://localhost:8080/api/hello';
       return fetch(url).then(function(response) {
           if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText);
               error.response = response;
               throw error;
           }
           return response.json();
       })
 
       .then(function(data) {
               console.log("DATA", data);
           return dispatch(
               fetchHelloSuccess(data)
           );
       })
       .catch(function(error) {

           return dispatch(
               fetchHelloError(error)
           );
       });
   }
};

exports.fetchData = fetchData;
exports.FETCH_HELLO_SUCCESS = FETCH_HELLO_SUCCESS;
exports.fetchHelloSuccess = fetchHelloSuccess;
exports.FETCH_HELLO_ERROR = FETCH_HELLO_ERROR;
exports.fetchHelloError = fetchHelloError;