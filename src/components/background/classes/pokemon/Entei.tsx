import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default class Entei {
    private object: Group

    constructor(scene, loader: GLTFLoader) {
        loader.load("/entei.glb", (gltf) => {
            this.object = gltf.scene;
            this.position();
            scene.add(this.object);
        });
    }

    private position() {
        this.object.translateY(-3)
        this.object.translateX(-11)
        this.object.translateZ(14)
        this.object.rotateY(Math.PI / 2);
        this.object.scale.set(0.65, 0.65, 0.65);
    }
}