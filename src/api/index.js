import axios from 'axios';

class Api {

	constructor() {
		// this.url = 'http://localhost:3001'
		this.url = 'https://top-quality-api.herokuapp.com'
	}
 


	getProducts() {
		return axios.get(`${this.url}/product/list/all`)
	}

}


export default Api