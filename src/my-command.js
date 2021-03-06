var sketch = require('sketch/dom');
var Rectangle = require('sketch/dom').Rectangle;
var UI = require('sketch/ui');


export default function(context) 
{

	const document = sketch.fromNative(context.document);
	const page = document.selectedPage;

	UI.message("Perfecting your designs 💅")
	
	for(var i=0; i<page.layers.length; i++)
	{

		var foo = page.layers[i];

		for(var j=0; j<foo.layers.length; j++)
		{
			var shapeRect = foo.layers[j].frame;
			x = shapeRect.x;
			y = shapeRect.y;
			width = shapeRect.width;
			height = shapeRect.height;

			foo.layers[j].frame = perfecto(x,y, width, height);

		}
	}

	UI.message("Looks gorgeous! 💋")
}




function perfecto(x, y, width, height){

	var newWidth = Math.round(width);
	var newHeight = Math.round(height);
	var newX = Math.round(x);
	var newY = Math.round(y);

	var rect = new Rectangle(newX, newY, newWidth, newHeight);
	return rect;
}
