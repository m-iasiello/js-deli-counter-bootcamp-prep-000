var katzDeli = []
var katzDeliLine = []

function takeANumber(line, name) {
  line.push(name)
  var position = line.length
  var greet =  `Welcome, ${name}. You are number ${position} in line.`
  return greet
}

function nowServing(line) {
  if (line.length > 0) {
     var serving = line.shift()
     var name = `Currently serving ${serving}.`
     return name
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if(line.length > 0) {
    currentLine = `The line is currently: 
  }
}