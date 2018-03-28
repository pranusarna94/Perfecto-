var sketch = require('sketch/dom');
var Rectangle = require('sketch/dom').Rectangle;
var UI = require('sketch/ui');

var Document = require('sketch/dom').Document




export default function(context) 
{

	const document = sketch.fromNative(context.document);
	const page = document.selectedPage;
	const selection = document.selectedLayers;

	for(var j=0; j<selection.layers.length; j++)
	{
		var shapeRect = selection.layers[j].frame;
		x = shapeRect.x;
		y = shapeRect.y;
		width = shapeRect.width;
		height = shapeRect.height;

		selection.layers[j].frame = perfecto(x,y, width, height);
		log(selection.layers[j].frame);
	}


	
	UI.message("Looks gorgeous! Perfecto! 👌")
}




function perfecto(x, y, width, height){

	var newWidth = Math.round(width);
	var newHeight = Math.round(height);
	var newX = Math.round(x);
	var newY = Math.round(y);

	var rect = new Rectangle(newX, newY, newWidth, newHeight);
	return rect;
}
