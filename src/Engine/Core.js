"use strict";

let gEngine = gEngine || {};

gEngine.Core = (() => {
	let mGL = null;

	const getGL = () => {return GL;};

	const mPublic = {
		getGL : getGL
	};

	return mPublic;
}());

const initializeWebGL = () => {
	const canvas = document.getElementById(htmlCanvasID);

	 mGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

	 if (mGL === null) {
		 document.write("<br><b>WebGL is not supported!</b>");
		 return;
	 }
	 gEngine.VertexBuffer.initialize();
};

var clearCanvas = color => {
	 mGL.clearColor(color[0], color[1], color[2], color[3]); // set the color to
	 mGL.clear(mGL.COLOR_BUFFER_BIT);
};

const mPublic = {
	getGL : getGL,
	initializeWebGL : initializeWebGL,
	clearCanvas : clearCanvas
};