// primero creamos el campo
var stage = new Konva.Stage({
    container: 'container',
    width: 400,
    height: 400
});

// creamos la capa
var layer = new Konva.Layer();

// creamos la forma
var circle = new Konva.Circle({
    x: stage.getWidth() / 2 - 50,
    y: stage.getHeight() / 2 - 50,
    radius: 7,
    fill: 'black',
    stroke: 'gray',
    strokeWidth: 3
});

// añadimos una forma mas
var circle2 = new Konva.Circle({
    x: stage.getWidth() / 2 + 50,
    y: stage.getHeight() / 2 + 50,
    radius: 7,
    fill: 'black',
    stroke: 'gray',
    strokeWidth: 3
});

//añadimos un circulo mas
var circle3 = new Konva.Circle({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    radius: 7,
    fill: 'green',
    stroke: 'yellow',
    strokeWidth: 3
});
