//Ui Providers ------------------------------------------------------------------------------
function getQuadro(id, titulo){ 
    lastQuadroId = id
    var quadro = document.createElement("div")
    quadro.id = `quadro-${id}`
    quadro.className = quadroClass
    quadro.style = `background-color: ${getColor()};`
    
    quadro.append(quadroHeader(titulo, id))
    
    return quadro
}

function quadroHeader(titulo, id){
    var header = `
    <div id="quadroHeader" class="row mb-2">
        <div class="row col"> <h5 class="my-3">${titulo}</h5> </div>
        <div class="col-3 mt-2">
        <button class="col  btn  btn-info add" onclick="adicionarCard(${id})"> <i
            class="material-icons">add</i></button>
        </div>
    </div>
    `
    var div = document.createElement('div')
    div.innerHTML = header.trim();
    return div.firstChild;
}

function getCard(title, cardId){
    var card = document.createElement("div")
    card.id = `card-${cardId}`
    card.className = cardClass
    card.style = `background-color: ${cardColor};`
    
    var text = document.createTextNode(title);
    card.append(text)
    card.setAttribute('onClick', `onCardClick(${cardId})`)
    return card
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