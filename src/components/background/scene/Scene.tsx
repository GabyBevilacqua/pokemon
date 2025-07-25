import { Scene as SceneThree } from "three";
import Camera from "../classes/Camera";
import Lights from "../classes/Lights";
import Skybox from "../classes/Skybox";
import Logo from "../classes/pokemon/Logo";
import Loader from "../classes/Loader";


export default class Scene extends SceneThree {
    private camera: Camera

    constructor(renderer) {
        super();
        const loader = new Loader
        this.camera = new Camera();
        new Lights(this);
        new Skybox(this);
        new Logo(this, loader)
        this.update(renderer)
    }

    private update(renderer){
        renderer.render(this, this.camera);
        requestAnimationFrame(this.update.bind(this, renderer));
    }
}