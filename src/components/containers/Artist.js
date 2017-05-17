import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Artist extends Component {

	render(){
		const artist = this.props.artist || []

		return(
			<div>
				<h2>ARTIST: {artist.name}</h2><br />
				<h2>POPULARITY RANKING: {artist.popularity}</h2><br />
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		artist: state.artist.artist
	}
}

export default connect(stateToProps)(Artist)
