//Ui Providers ------------------------------------------------------------------------------
function getQuadro(id, titulo, status, color){ 
    lastQuadroId = id
    var quadro = document.createElement("div")
    quadro.id = `quadro-${id}`
    quadro.className = quadroClass
    quadro.style = `background-color: ${color ?? getColor()};`
    
    quadro.append(quadroHeader(titulo, id))
    
    return quadro
}


function quadroHeader(titulo, id){
    var header = `
    <div id="quadroHeader" class="row mb-2">
        <div class="row col"> <h5 class="my-3">${titulo}</h5> </div>
        <div class="col-3 mt-2">
        <button class="col  btn  btn-info add" onclick="abrirModal('${id}')"> <i
            class="material-icons">add</i></button>
        </div>
    </div>
    `
    var div = document.createElement('div')
    div.innerHTML = header.trim();
    return div.firstChild;
}

function getLabels(labels){
    retorno = ""
    labels.forEach( l =>{
        retorno += `
        <div id="quadroHeader" class="label" style="background-color: ${l.color};">
        ${l.title}
        </div>
        `
    })
    return retorno
}

function getCard(text, id, labels){
    var header = `
    <div id="card-${id}" class="${cardClass}" style="background-color: ${cardColor};" onclick="onCardClick('${id}')">
    <div class="col">${text}
    
    <button class="btn delete" onclick="deletaCard('${id}')">
        <i class=" material-icons">
            close
        </i>
    </button>

    ${getLabels(labels)}

    
    </div>
    </div>
    `
    var div = document.createElement('div')
    div.innerHTML = header.trim();
    return div.firstChild;   
}

function onCardClick(id){
    console.log("click : " + id )
}

function getButton(text){
    var btn = document.createElement("button")
    var text = document.createTextNode(text);
    btn.append(text)
    btn.className = "col-md-4 add"
    return btn
}

