var colors = ['Aquamarine', 'CornflowerBlue', 'DeepPink']
var cardColor = "GhostWhite"

var colorIndex = 0

var defaultCols = "col-4"
var quadroClass = "align-self-start quadro " + defaultCols
var cardClass = "row card"


var colorIndex = 0
//Get color from colors global and increment index or return to 0
function getColor(){ 
    var color = colors[colorIndex]
    if(colorIndex < colors.length - 1)
        colorIndex++
    else
        colorIndex = 0
    return color
}