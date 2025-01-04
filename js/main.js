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
    if (!token) { //permet de ne pas lancer la fonction tant que pas de token
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
            return data
        })
}


function apparitionGeneral() {
    btnGeneral.addEventListener('click', () => {
        menuGeneral.classList.remove('d-block');
        menuGeneral.classList.add('d-none');
        displayGeneral.classList.remove('d-none');
        displayGeneral.classList.add('d-block');
        allGeneral()
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
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    author.innerHTML = data.author.displayName + ' : ';
    author.classList.add('author', 'm-1');
    content.innerHTML = data.content;
    content.classList.add('content', 'm-1');
    deleteButton.innerHTML = data.id + 'supp'
    deleteButton.classList.add('btn', 'bg-warning', 'm-1', 'deleteButton');
    editButton.classList.add('btn', 'bg-info', 'm-1', 'editButton');
    editButton.innerHTML = data.id + 'edit';

    deleteButton.addEventListener('click', () => {
        deleteMessageGeneral(data.id)
            .then(() => {
                divMessage.remove();
            })
    });

    switch (data.author.username) {
        case 'emiliech':
            author.classList.add('emilie');
            break;
            case 'enzo':
                author.classList.add('enzo',);
                break;
                case 'arthur':
                    author.classList.add('arthur');
                    break;
                    case 'chrisna':
                    author.classList.add('chrisna');
                    break;
    }

    divMessage.classList.add('divMessage', 'border', 'rounded', 'm-1');
    divMessage.appendChild(author);
    divMessage.appendChild(content);
    divMessage.appendChild(deleteButton);
    divMessage.appendChild(editButton);

    messageAll.appendChild(divMessage);
}

async function addMessagesGeneral(content) {
    if (!token) {
        console.error("Aucun token");
        return null;
    }
        let paramNewGeneralMessage = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                content: content
            })
        }
        return await fetch('https://b1messenger.esdlyon.dev/api/messages/new', paramNewGeneralMessage)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                return json.token
            })
}

function addNewMessageGeneral (){
    const inputNewMessageGeneral = document.querySelector('.inputChatGeneral')
    let btnNewChatGeneral = document.querySelector('.newChatGeneral')
    btnNewChatGeneral.addEventListener('click', () => {
        const content = inputNewMessageGeneral.value;
        addMessagesGeneral(content)
            .then((data) => {
                console.log(data)
            })
        displayMessages()
        inputNewMessageGeneral.value = "";
    })
}
addNewMessageGeneral()

function refresh(){
    const btnRefresh = document.querySelector('.refreshBtn');
    btnRefresh.addEventListener('click', ()=>{
        allGeneral();
        console.log("fraicheur de fruit")
    })
}
refresh();

async function deleteMessageGeneral(id) {
    if (!token) {
        console.error("Aucun token");
        return null;
    }
    let paramDelete = {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer " + token
        },
    }
    return await fetch(`https://b1messenger.esdlyon.dev/api/messages/delete/${id}`, paramDelete)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return json.token;
        })
}

async function modifMessage(edit){
    if (!token) {
        console.error("Aucun token");
        return null;
    }
    let paramModif = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            content: edit
        })
    }
    return await fetch(`https://b1messenger.esdlyon.dev/api/messages/${id}/edit`, paramModif)
        .then(res => res.json())
    .then(json => {
        console.log(json)
        return json.token;
    })
}
