async function start(){
    try {
        const result = await fetch('https://api.github.com/users/GaaraSan01')
        const user = await result.json();
        const reposResponse = await fetch(user.repos_url);
        const repos = await reposResponse.json();
        console.log(repos) 
    } catch (error) {
        console.log(error)
    }
}
start()