function SimpleShader(VertexShader, FragmentShader){
	this.mCompiledShader = null;
	this.mShaderVertexPositionAttribute = null;

	const  gl = gEngine.Core.getGL();
	const vertexShader = this._loadAndCompileShader(vertexShaderID, gl.VERTEX_SHADER);
 	const fragmentShader = this._loadAndCompileShader(fragmentShaderID, gl.FRAGMENT_SHADER);

	this.mCompiledShader = gl.createProgram();
 	gl.attachShader(this.mCompiledShader, vertexShader);
	gl.attachShader(this.mCompiledShader, fragmentShader);
	gl.linkProgram(this.mCompiledShader);

	if (!gl.getProgramParameter(this.mCompiledShader, gl.LINK_STATUS)) {
		alert("Error linking shader");
 		return null;
 	}

 	this.mShaderVertexPositionAttribute = gl.getAttribLocation(this.mCompiledShader, "aSquareVertexPosition");

 	gl.bindBuffer(gl.ARRAY_BUFFER, gEngine.VertexBuffer.getGLVertexRef());

 	gl.vertexAttribPointer(this.mShaderVertexPositionAttribute, 3, gl.FLOAT, false, 0, 0); 
}

SimpleShader.prototype._loadAndCompileShader = (id, shaderType) => {

	const shaderText, shaderSource, compiledShader;
	const gl = gEngine.Core.getGL();

	shaderText = document.getElementById(id);
	shaderSource = shaderText.firstChild.textContent;

	compiledShader = gl.createShader(shaderType);

	gl.shaderSource(compiledShader, shaderSource);
	gl.compileShader(compiledShader);

	if (!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
		alert("A shader compiling error occurred: " +
		gl.getShaderInfoLog(compiledShader));
	}

 return compiledShader;
};

SimpleShader.prototype.activateShader = () => {

	const gl = gEngine.Core.getGL();
	gl.useProgram(this.mCompiledShader);
	gl.enableVertexAttribArray(this.mShaderVertexPositionAttribute);
};

SimpleShader.prototype.getShader = () => { return this.mCompiledShader; };