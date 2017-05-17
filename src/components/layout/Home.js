import React, { Component } from 'react'
import { Artist } from '../containers'
import { Search } from '../view'


class Home extends Component {
	render(){
		return(
			<div>
				<h1>Search for your favorite artist and see their Spotify popularity rating!</h1>
				<Search />
				<Artist />
			</div>
		)
	}
}

export default Home