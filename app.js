var express = require("express");
var app = express();
var Three = require("three");
var scene = new Three.Scene();

// // Convert gITF to Draco gITF
// const gltfPipeline = require('gltf-pipeline');
// const fsExtra = require('fs-extra');
// const processGltf = gltfPipeline.processGltf;
// const gltf = fsExtra.readJsonSync('model.gltf');
// const options = {
//     dracoOptions: {
//         compressionLevel: 10
//     }
// };
// processGltf(gltf, options)
//     .then(function(results) {
//         fsExtra.writeJsonSync('model-draco.gltf', results.gltf);
//     });


app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("3DModel");
});

app.listen(3000, function(){
	console.log("Server has started");
});