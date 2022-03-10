import React, { Component } from 'react'
import { HashRouter, Route, Routes as Switch } from 'react-router-dom'

import Header from './components/Header/index-lst'
import Footer from './components/Footer'
import Home from './components/Pages/Home'
import Detail from './components/Pages/Home/Products/Detail'
class Routes extends Component {

	render() {
		return (
			<div className="container">
				
				<HashRouter>
				<Header/>
					<Switch>
						<Route exact path="/home" element={<Home />} />
						<Route exact path="/detail" element= {<Detail/>} />
					</Switch>
				</HashRouter>
				<Footer/>
			</div>
		)
	}
}

export default Routes

