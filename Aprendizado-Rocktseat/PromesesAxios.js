import axios from 'axios';
axios.get('https://api.github.com/users/GaaraSan01')
.then(resposta => {
    console.log(resposta.data)
    const users = resposta.data
    return axios.get(users.repos_url)
}).then(repos => console.log(repos.data))
.catch( error => console.log(error))