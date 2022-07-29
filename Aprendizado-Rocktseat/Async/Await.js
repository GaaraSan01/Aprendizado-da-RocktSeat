const promessa = new Promise((resolve, reject) => {
    return resolve('ok')
})

async function Start(){
    try {
        const resultado = await promessa
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }    
}
Start()