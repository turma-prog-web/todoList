//TODO capturar listas do bd
var listas = [];

function getListaElement(id, titulo) {
    var listaElement = `
    <a onclick="openKanban(${id})" id="lista-${id}" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${titulo}</h5>
        </div>
        <small>
            <!-- TODO capturar dinamicamente as imagens dos usuários salvos no banco -->
            <img src="../assets/default-user-image.png" class="rounded-circle card-user-img">
        </small>
    </a>
    `

    var div = document.createElement('div')
    div.innerHTML = listaElement.trim();
    return div.firstChild;
}

function getListas(){ 
    var container = document.getElementById("container-lista");

    listas.forEach( l => {
        container.append(getListaElement(l.id, l.titulo));
    });
    
}

function openKanban(id) {
    window.router.goKanban(id)
}

function init() {
    mockListas();
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

function mockListas(){
    listas = [
        {
            id: 1,
            titulo: "Banana"
        },
        {
            id: 2,
            titulo: "Maçã"
        }
    ];
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