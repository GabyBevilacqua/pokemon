import { AmbientLight, HemisphereLight } from "three";

export default class Lights {

    //creando la iluminacion
    constructor(scene) {
        scene.add(new AmbientLight(0xffffff, 4));
        scene.add(new HemisphereLight(0xffffff, 0.8));

    }
}