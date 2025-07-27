import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Scene from "../../scene/Scene";

export default class Grass {

    private group: Group;
    private scene: Scene;
    private object: Group;

    constructor(scene, loader: GLTFLoader) {
        this.scene = scene;

        loader.load("/grass.glb", (gltf) => {
            this.object = gltf.scene;
            this.clone(-9,11)
            this.clone(-7,11)
            this.clone(-6,12)
            this.clone(-6,14)
            this.clone(-9,13)
            this.clone(-7,13)
            this.clone(-5,13)
            this.clone(-5,15)
            this.clone(-9,16)
            this.clone(-7,16.5)
            this.clone(-6,16)
            this.clone(-8,17)
            this.clone(-10,17)
        }

        );
}

    private clone(x, z) {
    const object = this.object.clone();
    object.translateY(-2)
    object.translateX(x)
    object.translateZ(z)
    object.rotateY(Math.PI / 4);
    this.scene.add(object);
}
}