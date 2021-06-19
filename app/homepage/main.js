var listas = [];

function getListaElement(id, titulo, users) {
    var listaElement = `
    <a  onclick="openKanban('${id}')" id="lista-${id}" class="rounded m-1 list-group-item list-group-item-action  ">
        <div >
        <h5 class="mb-1">${titulo}</h5>
        </div>
        ${getUserHtml(users)}
    </a>
    `

    var div = document.createElement('div')
    div.innerHTML = listaElement.trim();
    return div.firstChild;
}

function getListas(){ 
    var container = document.getElementById("container-lista");

    listas.forEach( l => {
        container.append(getListaElement(l._id, l.title, l.users));
        console.log("alguma coisa", l)
    });
    
}

function openKanban(id) {
    console.log(id)
    window.router.goKanban(id)
}

async function init() {
    await mockListas();
    getListas();
    keyListener();
}

function buscarListas(){
    clearListas()
    mockListas()
    var busca = document.getElementById("inputText").value
    var filtrado =  []
    listas.forEach( l => {
        if(l.titulo.toUpperCase().includes(busca.toUpperCase()))
            filtrado.push(l)
    })
    listas = filtrado
    getListas()
}

async function mockListas(){
    listas = await getTaskBoard()
}

function clearListas(){
    var element = document.getElementById("container-lista");
    element.innerHTML = null
}

function keyListener(){
    var enterKey = '13'
    $("#inputText").keypress(function(event) {
        if (event.keyCode == enterKey) {
            $("#filtrarBTN").click();
        }
    })

    $("#filtrarBTN").keypress(function(event) {
        if (event.keyCode == enterKey) {
            $("#filtrarBTN").click();
        }
    })
}

function adicionarLista(){
    clearListas()
    var titulo = document.getElementById("inputText-titulo").value
    listas.push({id:3, titulo})
    getListas()
    document.getElementById("inputText-titulo").value = ""
    fecharModal()
}

function abrirModal(){
    var modal = document.getElementById("modalNovaLista")
    modal.style.display = "block"
}

function fecharModal(){
    var modal = document.getElementById("modalNovaLista")
    modal.style.display = "none"
}

function getUserHtml(users){
    retorno = ""
    console.log("users", users)
    users.forEach( l =>{
        retorno += `
        <small>
            <img src="../assets/default-user-image.png" class="rounded-circle card-user-img">
        </small>
        `
    })
    return retorno
}
