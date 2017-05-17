import React, { Component } from 'react'
import superagent from 'superagent'
import { connect } from 'react-redux'
import actions from '../../actions'

class Search extends Component {
	constructor(){
		super()
		this.state = {
			search: {
				artist: ''
			}
		}
	}

	updateSearch(event){
		console.log('updateSearch: '+event.target.value)

		this.setState({
			artist: event.target.value
		})
	}

	submitSearch(){
		console.log('submitSearch: '+this.state.artist)

		const url = 'https://api.spotify.com/v1/search'

		const params = {
			q: this.state.artist,
			type: 'artist',
			offset: 0,
			limit: 1
		}

		superagent
		.get(url)
		.query(params)
		.set('Accept', 'application/json')
		.end((err, response) => {
			const artist = response.body.artists.items[0]
		//	console.log('RESPONSE: '+JSON.stringify(artist))
			this.props.artistReceived(artist)
		})
	}

	render(){
		return(
		  <div className="form-group">
		    <input onChange={this.updateSearch.bind(this)} type="text" name="artist" className="form-control" placeholder="Search for an artist..." /><br />
		  	<button onClick={this.submitSearch.bind(this)} type="submit" className="btn btn-block btn-xl">SEARCH</button>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		artist: state.artist
	}
}

const dispatchToProps = (dispatch) => {
	return {
		artistReceived: (artist) => dispatch(actions.artistReceived(artist))
	}
}

export default connect(stateToProps, dispatchToProps)(Search)