"use strict"; 

let gEngine = gEngine || { };

gEngine.VerteBuffer = (() => {
	let verticesOfSquare = [
		 0.5, 0.5, 0.0,
		 -0.5, 0.5, 0.0,
		 0.5, -0.5, 0.0,
		 -0.5, -0.5, 0.0
	 ];

	 let mSquareVertexBuffer = null;
	 const getGLVertexRef = () => { return mSquareVertexBuffer; };

	 var initialize = () => {
		 const gl = gEngine.Core.getGL();
		 
		 mSquareVertexBuffer = gl.createBuffer();
		 gl.bindBuffer(gl.ARRAY_BUFFER, mSquareVertexBuffer);
		 gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesOfSquare),
		 gl.STATIC_DRAW);
	 };

	 var mPublic = {
		 initialize: initialize,
		 getGLVertexRef: getGLVertexRef
	 };
	 
	 return mPublic;
}());