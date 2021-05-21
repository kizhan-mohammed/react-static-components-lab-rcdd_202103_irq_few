import React, { Component } from 'react';
<<<<<<< HEAD
import CatComponent from './CatComponent';
import{GraceHopperQuoteComponent} from './GraceHopperQuoteComponent';
import MouseComponent from './MouseComponent';
=======
import CatComponent from './src/CatComponent.js'
import {GraceHopperQuoteComponent} from './src/GraceHopperQuoteComponent';
import MouseComponent from './src/MouseComponent.js'
>>>>>>> 8f638ce77f51542fae1b72031fb0541972b4bb4e



class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				{/* one more component missing */}
				<MouseComponent />
			</div>
		);
	}
}

export default App;
