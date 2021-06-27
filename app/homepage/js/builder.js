//Gera um item da  lista
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

//Gera uma lista de ícones para lista
function getUserHtml(users){
    retorno = ""
    users.forEach( l =>{
        retorno += `
        <small>
            <img src="${ l.picture }" alt="../assets/default-user-image.png" class="rounded-circle card-user-img">
        </small>
        `
    })
    return retorno
}

function openKanban(id) {
    window.router.goKanban(id)
}