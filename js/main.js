let token = null

async function login() {
    let params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'enzo',
            password: 'abRULSboZD'
        })
    }
    return await fetch('https://b1messenger.esdlyon.dev/login', params)
    .then(res => res.json())
        .then(json => {
            console.log(json)
            return json.token
        })
}

function enterMessenger() {
    const username = document.querySelector('.inputUsername')
    const password = document.querySelector('.inputPassword')
    const logBtn = document.querySelector('.loginBtn')
    let pTest = document.querySelector('.test')
    let logPage = document.querySelector('.loginPage')
    logBtn.addEventListener('click', () => {
        login(username.value = 'enzo', password.value = 'abRULSboZD')
            .then((data) => {
            token = data
                console.log(data)
            pTest.classList.remove('d-none')
                pTest.classList.add('d-block')
                logPage.classList.remove('d-block')
                logPage.classList.add('d-none')
        })
    })
}
enterMessenger()