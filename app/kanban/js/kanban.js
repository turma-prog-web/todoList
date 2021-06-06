var colors = ['Aquamarine', 'CornflowerBlue', 'DeepPink', 'Indigo']
var cardColor = "GhostWhite"

var colorIndex = 0
var boardCounter = 0
var cardCounter = 0

var defaultCols = "col-4"
var quadroClass = "align-self-start quadro " + defaultCols
var cardClass = "row card"

var lastQuadroId = 0

function clearBoard(){
    var element = document.getElementById("board-columns");
    element.innerHTML = null
}

function adicionarQuadro(){
    var element = document.getElementById("board-columns");
    var titulo = document.getElementById("inputText").value
    var quadro = getQuadro(++lastQuadroId,  titulo)
    element.appendChild(quadro);
}

/* Cria um novo card na tela, caso tiulo seja null usa nome default*/
function adicionarCard(id, titulo){
    var quadro = document.getElementById(`quadro-${id}`)
    var card = getCard(titulo == null ? "Nova Tarefa" : titulo)
    quadro.append(card)
}

//Todo separar em módulos
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

function getCard(title){//Todo use callback when click to open card
    var card = document.createElement("div")
    card.id = `card-${++cardCounter}`
    card.className = cardClass
    card.style = `background-color: ${cardColor};`
    
    var text = document.createTextNode(title);
    card.append(text)
    card.setAttribute('onClick', `onCardClick(${cardCounter})`)
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

//Get color from colors global and increment index or return to 0
function getColor(){ 
    var color = colors[colorIndex]
    if(colorIndex < colors.length - 1)
        colorIndex++
    else
        colorIndex = 0
    return color
}