let token = null
const btnGeneral = document.querySelector('.general')
const chatGeneral = document.querySelector('.displayChatGeneral')
const username = document.querySelector('.inputUsername')
const password = document.querySelector('.inputPassword')
const logBtn = document.querySelector('.loginBtn')
let menuGeneral = document.querySelector('.menu')
let logPage = document.querySelector('.loginPage')
const displayGeneral = document.querySelector('.chatGeneral')
const chatPrivate = document.querySelector('.chatPrivate')
const displayPrivate = document.querySelector('.displayChatPrivate')
const btnPrivate = document.querySelector('.privé')
const chooseChat = document.querySelector('.chooseChat')
const btnArthur = document.querySelector('.btnArthur')
const btnEmilie = document.querySelector('.btnEmilie')
const btnChrisna = document.querySelector('.btnChrisna')

//abRULSboZD = mdp




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
                    menuGeneral.classList.add('d-flex');
                    logPage.classList.remove('d-block');
                    logPage.classList.add('d-none');
                } else {
                    console.error("pas de token encore");
                }
        })
    })
}
enterMessengerMenu()

async function enterGeneral(data) {
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

async function privateMessageChrisna(){
    if (!token) {
        console.error("Aucun token");
        return null;
    }
    let paramPrivateMessageChrisna = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        },
    }
    return await fetch(`https://b1messenger.esdlyon.dev/api/private/conversation/1`, paramPrivateMessageChrisna)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return json.token;
        })
}
async function privateMessageEmilie(){
    if (!token) {
        console.error("Aucun token");
        return null;
    }
    let paramPrivateMessageEmilie = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        },
    }
    return await fetch(`https://b1messenger.esdlyon.dev/api/private/conversation/5`, paramPrivateMessageEmilie)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return json.token;
        })
}
async function privateMessageArthur(){
    if (!token) {
        console.error("Aucun token");
        return null;
    }
    let paramPrivateMessageArthur = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        },
    }
    return await fetch(`https://b1messenger.esdlyon.dev/api/private/conversation/15`, paramPrivateMessageArthur)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return json.token;
        })
}


function apparitionChoosePrivate() {
    btnPrivate.addEventListener('click', () => {
        menuGeneral.classList.remove('d-block');
        menuGeneral.classList.add('d-none');
        chooseChat.classList.remove('d-none');
        chooseChat.classList.add('d-block');
    })
}
apparitionChoosePrivate()

function apparitionMessagePrivate() {
    btnArthur.addEventListener('click', () => {
        chooseChat.classList.remove('d-block');
        chooseChat.classList.add('d-none');
        chatPrivate.classList.remove('d-none');
        chatPrivate.classList.add('d-block');
    })
    btnEmilie.addEventListener('click', () => {
        chooseChat.classList.remove('d-block');
        chooseChat.classList.add('d-none');
        chatPrivate.classList.remove('d-none');
        chatPrivate.classList.add('d-block');
    })
    btnChrisna.addEventListener('click', () => {
        chooseChat.classList.remove('d-block');
        chooseChat.classList.add('d-none');
        chatPrivate.classList.remove('d-none');
        chatPrivate.classList.add('d-block');
        privateChrisna()
    })
}

apparitionMessagePrivate()

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

function privateChrisna() {
    if (!token) {
        console.error("Aucun token");
        return null;
    }

    displayPrivate.innerHTML = ''

    privateMessageChrisna()
        .then((data) => {
            console.log(data);
            data.forEach(element => {
                displayMessages(element);
            })
        })
}

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
//pas fini
function displayMessagesPrivate(data){
    const messageAllPrivate = document.querySelectorAll('.displayChatPrivate')
    const divMessage = document.createElement('div');
    const pp = document.createElement('img');
    const author = document.createElement('p');
    const content = document.createElement('p');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
}

function displayMessages(data) {
    const messageAll = document.querySelector('.displayChatGeneral');

    const divMessage = document.createElement('div');
    const pp = document.createElement('img');
    const author = document.createElement('p');
    const content = document.createElement('p');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    //collapse bootstrap
    //const collapse = document.createElement('p');
    //collapse.classList.add('d-inline-flex', 'gap-1');
    //const btnResponse = document.createElement('button');
    //btnResponse.classList.add('btn', 'btn-primary');
    //const collapseDiv = document.createElement('div');
    //collapseDiv.classList.add('collapse');
    //collapseDiv.id = 'collapseExample';
    //const cardDiv = document.createElement('div');
    //cardDiv.classList.add('card', 'card-body');
    //btnResponse.setAttribute('data-bs-toggle', 'collapse');
    //btnResponse.setAttribute('data-bs-target', '#collapseExample');
    //btnResponse.setAttribute('aria-expanded', 'false');
    //btnResponse.setAttribute('aria-controls', 'collapseExample');
    //btnResponse.innerHTML = 'Response';
    //collapse.appendChild(btnResponse);
    //collapseDiv.appendChild(cardDiv);
    //------

    divMessage.classList.add('messages');
    author.innerHTML = data.author.displayName + ' : ';
    author.classList.add('author', 'm-1');
    content.innerHTML = data.content;
    content.classList.add('content', 'm-1');
    deleteButton.innerHTML = data.id + 'supp'
    deleteButton.classList.add('btn', 'm-1', 'deleteButton');
    editButton.classList.add('btn', 'm-1', 'editButton');
    editButton.innerHTML = data.id + 'edit';
    pp.classList.add('profilePicture');



    deleteButton.addEventListener('click', () => {
        const modalDelete = new bootstrap.Modal(document.querySelector('.modalDelete'));
        modalDelete.show();
        const btnConfirme = document.querySelector('.confirmer');
        btnConfirme.addEventListener('click', () => {
            deleteMessageGeneral(data.id)
                .then(() => {
                    divMessage.remove();
                })
        })

    });

    editButton.addEventListener('click', () => {
        const modalEdit = new bootstrap.Modal(document.querySelector('.modalEdit')) //bootstrap à sa propre API peut pas la modifier juste avec le DOM
        modalEdit.show();
        const inputEditMessageG = document.querySelector('.inputEditChatGeneral');
        inputEditMessageG.value = data.content;
        const btnEditMessageG = document.querySelector('.save');
        btnEditMessageG.setAttribute('data-id', data.id); //l'attribut data.id est donnée au string data-id donc le bouton contient comme attribut l'ID

    })

    switch (data.author.username) {
        case 'emiliech':
            author.classList.add('emilie');
            pp.src = data.author.image.imageName;
            //btnResponse.setAttribute('data-bs-target', '#collapseEmilie');
            //btnResponse.setAttribute('aria-controls', 'collapseEmilie');
            //collapseDiv.id = 'collapseEmilie';
            //cardDiv.innerHTML = data.response.content;
            break;
            case 'enzo':
                author.classList.add('enzo',);
                pp.src = data.author.image.imageName;
                //btnResponse.setAttribute('data-bs-target', '#collapseEnzo');
                //btnResponse.setAttribute('aria-controls', 'collapseEnzo');
                //collapseDiv.id = 'collapseEnzo';
                //cardDiv.innerHTML = data.response.content;
                break;
                case 'arthur':
                    author.classList.add('arthur');
                    pp.src = data.author.image.imageName;
                    //btnResponse.setAttribute('data-bs-target', '#collapseArthur');
                    //btnResponse.setAttribute('aria-controls', 'collapseArthur');
                    //collapseDiv.id = 'collapseArthur';
                    //cardDiv.innerHTML = data.response.content;
                    break;
                    case 'chrisna':
                    author.classList.add('chrisna');
                    pp.src = data.author.image.imageName;
                        //btnResponse.setAttribute('data-bs-target', '#collapseChrisna');
                        //btnResponse.setAttribute('aria-controls', 'collapseChrisna');
                        // collapseDiv.id = 'collapseChrisna';
                        // cardDiv.innerHTML = data.response.content;
                    break;
    }




    divMessage.classList.add('divMessage', 'm-1');
    divMessage.appendChild(pp)
    divMessage.appendChild(author);
    divMessage.appendChild(content);
    //divMessage.appendChild(collapse);
    //divMessage.appendChild(collapseDiv);

    if (data.author.username === 'enzo') {
        divMessage.appendChild(deleteButton);
        divMessage.appendChild(editButton);
    }

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

async function modifMessage(edit, id){
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
function editMessageGeneral (){
    const inputEditMessageG = document.querySelector('.inputEditChatGeneral')
    let btnEditMessageG = document.querySelector('.save')

    btnEditMessageG.addEventListener('click', () => {

        const edit = inputEditMessageG.value;
        const id = btnEditMessageG.getAttribute('data-id'); //on donne l'attribut donc l'ID au bouton pour valider le changement
        modifMessage(edit, id)
            .then((data) => {
                console.log(data)
                //const editMessage = document.createElement('p')
                //editMessage.classList.add('fs-6', 'messageModifié', 'fw-lighter', 'ms-4')
                //ajouter du texte pour indiquer que le message est modifié
                allGeneral()
            })
        displayMessages()
        inputEditMessageG.value = "";
    })
}
editMessageGeneral()

async function editDisplayName(displayName){
    if (!token) {
        console.error("Aucun token");
        return null;
    }
    let paramEditDisplayName = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            displayName: displayName
        })
    }
    return await fetch(`https://b1messenger.esdlyon.dev/api/profile/edit`, paramEditDisplayName)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return json.token;
        })
}

function newDisplayName(){
    const inputEditDisplayName = document.querySelector('.inputEditDisplayName')
    let btnEditDisplayName = document.querySelector('.btnDisplayName')

    btnEditDisplayName.addEventListener('click', () => {

        const displayName = inputEditDisplayName.value;
        editDisplayName(displayName)
            .then((data) => {
                console.log(data)
                //const editMessage = document.createElement('p')
                //editMessage.classList.add('fs-6', 'messageModifié', 'fw-lighter', 'ms-4')
                //ajouter du texte pour indiquer que le message est modifié
            })
        inputEditDisplayName.value = "";
    })
}
newDisplayName()

async function newProfilePicture(){
    if (!token) {
        console.error("Aucun token");
        return null;
    }
    let paramNewPP = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            content: content
        })
    }
    return await fetch('https://b1messenger.esdlyon.dev/api/messages/new', paramNewPP)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return json.token
        })
}

