let token = null
const btnGeneral = document.querySelector('.general')
const chatGeneral = document.querySelector('.displayChatGeneral')
const username = document.querySelector('.inputUsername')
const password = document.querySelector('.inputPassword')
const logBtn = document.querySelector('.loginBtn')
let menuGeneral = document.querySelector('.menu')
let logPage = document.querySelector('.loginPage')
const displayGeneral = document.querySelector('.chatGeneral')

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

function enterMessengerMenu() {

    logBtn.addEventListener('click', () => {
        login(username.value = 'enzo', password.value = 'abRULSboZD')
            .then((data) => {
            token = data
                console.log(data)
                if (token) {
                    menuGeneral.classList.remove('d-none');
                    menuGeneral.classList.add('d-block');
                    logPage.classList.remove('d-block');
                    logPage.classList.add('d-none');
                } else {
                    console.error("pas de token encore");
                }
        })
    })
}
enterMessengerMenu()

async function enterGeneral() {
    if (!token) {
        console.error("Aucun token");
        return null;
    }

    let paramGeneral = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        },
    }
    return await fetch('https://b1messenger.esdlyon.dev/api/messages', paramGeneral)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}


function apparitionGeneral() {
    btnGeneral.addEventListener('click', () => {
        menuGeneral.classList.remove('d-block');
        menuGeneral.classList.add('d-none');
        displayGeneral.classList.remove('d-none');
        displayGeneral.classList.add('d-block');
    })
}

apparitionGeneral()



function allGeneral() {
    if (!token) {
        console.error("Aucun token");
        return null;
    }

    chatGeneral.innerHTML = ''

        enterGeneral()
            .then((data) => {
                console.log(data);
                data.forEach(element => {
                    displayMessages(element);
                })
            })
}

function displayMessages(data) {
    const messageAll = document.querySelector('.displayChatGeneral');
    const divMessage = document.createElement('div');
    const author = document.createElement('p');
    const content = document.createElement('p');

    author.innerHTML = data.author.displayName;
    author.classList.add('author');
    content.innerHTML = data.content;
    content.classList.add('content');


    divMessage.classList.add('divMessage');
    divMessage.appendChild(author);
    divMessage.appendChild(content);

    messageAll.appendChild(divMessage);
}

allGeneral()
