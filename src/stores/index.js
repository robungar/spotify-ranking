import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { artistReducer } from '../reducers'

var store;

export default {
	initialize: () => {
		const reducers = combineReducers({
			artist: artistReducer
		})
		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)
		return store
	},
	currentStore: () => {
		return store
	}
}