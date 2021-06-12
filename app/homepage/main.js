//TODO capturar listas do bd
var listas = [
    {
        id: 1,
        titulo: "Banana"
    },
    {
        id: 2,
        titulo: "Maçã"
    }
];

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

function getLista(){ 
    var container = document.getElementById("container-lista");

    listas.forEach( l => {
        container.append(getListaElement(l.id, l.titulo));
    });
    
}

function openKanban(id) {
    window.router.goKanban(id)
}

function init() {
    getLista();
}