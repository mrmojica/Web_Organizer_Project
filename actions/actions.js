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