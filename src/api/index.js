import axios from 'axios';

class Api {

	constructor() {
		 //this.url = 'http://localhost:3002'
		this.url = 'https://top-quality-api.herokuapp.com'
	}
 


	getProducts() {
		return axios.get(`${this.url}/product/catalog/shoes`)
	}

}


export default Api