Promise.all([
    axios.get('https://api.github.com/users/GaaraSan01'),
    axios.get('https://api.github.com/users/GaaraSan01')
]).then(Responses => {
    console.log(Responses[0].data.login)
    console.log(Responses[1].data.length)
}).catch(erro => console.log(erro.message))