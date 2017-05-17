import constants from '../constants'

var initialState = {
	artist: null
}

export default (state = initialState, action) => {

	switch(action.type){
		case constants.ARTIST_RECEIVED:
			console.log('ARTIST_RECEIVED: '+JSON.stringify(action.artist))
			let updated = Object.assign({}, state)
			updated['artist'] = action.artist
			return updated

		default:
			return state
	}
}