var colors = ['Aquamarine', 'CornflowerBlue', 'DeepPink', 'Indigo']
var cardColor = "GhostWhite"

var colorIndex = 0
var boardCounter = 0

var debugCallback = () => console.log("click")

var defaultCols = "col-4"
var quadroClass = "align-self-start quadro " + defaultCols
var cardClass = "row card"

function adicionarQuadro(){
    var element = document.getElementById("board-columns");
    var quadro = getQuadro()
    element.appendChild(quadro);
}

function adicionarCard(id){
    var quadro = document.getElementById(`quadro-${id}`)
    var card = getCard("Nova tarefa", debugCallback)
    quadro.append(card)
}

//Todo separar em módulos
//Ui Providers ------------------------------------------------------------------------------
function getQuadro(){ 
    var quadro = document.createElement("div")
    quadro.id = `quadro-${boardCounter}`
    quadro.className = quadroClass
    quadro.style = `background-color: ${getColor()};`
    
    var text = document.createTextNode("Novo Quadro");
    quadro.append(text)

    var button = getButton("+")
    button.setAttribute('onClick', `adicionarCard(${boardCounter})`)
    quadro.append(button)
    boardCounter++
    return quadro
}

function getCard(title, callback){//Todo use callback when click to open card
    var card = document.createElement("div")
    card.className = cardClass
    card.style = `background-color: ${cardColor};`
    
    var text = document.createTextNode(title);
    card.append(text)
    return card
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