import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default class Charizard {
    private object: Group

    constructor(scene, loader: GLTFLoader) {
        loader.load("/charizard.glb", (gltf) => {
            this.object = gltf.scene;
            this.position();
            scene.add(this.object);
        });
    }

    private position() {
        this.object.translateY(-2)
        this.object.translateX(-10)
        this.object.translateZ(16.5)
        this.object.rotateY(Math.PI / 2);
        this.object.scale.set(0.8, 0.8, 0.8);
    }
}