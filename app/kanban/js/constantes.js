var colors = ['Aquamarine', 'CornflowerBlue', 'DeepPink']

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