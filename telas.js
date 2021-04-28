var boardCounter = 0
var colors = ['Aquamarine', 'CornflowerBlue', 'DeepPink', 'Indigo']
var cardColor = "GhostWhite"
var colorIndex = 0
var defaultCols = "col-4"
var debugCallback = () => console.log("click")

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
    quadro.className = defaultCols
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
    card.className = "row"
    card.style = `background-color: ${cardColor};`
    
    var text = document.createTextNode(title);
    card.append(text)
    return card
}

function getButton(text){
    var btn = document.createElement("button")

    btn.className = "col-md-4 offset-md-4"
    btn.style = `background-color: LightGreen;`

    var text = document.createTextNode(text);
    btn.append(text)
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