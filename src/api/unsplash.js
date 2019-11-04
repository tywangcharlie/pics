import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 
			'Client-ID 7067834b4daee6c815b1f6da7816a909d85a24194a4dac7376fd1535e2ca2b17'
	}
});