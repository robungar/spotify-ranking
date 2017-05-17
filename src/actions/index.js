import constants from '../constants'

export default {
	
	artistReceived: (artist) => {
		return {
			type: constants.ARTIST_RECEIVED,
			artist: artist
		}
	}
}