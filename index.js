import { Engine, Scene, ArcRotateCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";

var canvas = document.getElementById("renderCanvas");
var engine = new Engine(canvas, true);

var createScene = function() {
    var scene = new Scene(engine);

    var camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    var light1 = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);

    var sphere = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

    return scene;
}

var scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});
