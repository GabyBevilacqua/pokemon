import { Scene as SceneThree } from "three";
import Camera from "../classes/Camera";
import Lights from "../classes/Lights";
import Skybox from "../classes/Skybox";
import Logo from "../classes/pokemon/Logo";
import Loader from "../classes/Loader";
import Pokeball from "../classes/pokemon/Pokeball";
import Entei from "../classes/pokemon/Entei";
import Groudon from "../classes/pokemon/Groudon";
import Charizard from "../classes/pokemon/Charizard";
import Zekrom from "../classes/pokemon/Zekrom";


export default class Scene extends SceneThree {
    private camera: Camera

    constructor(renderer) {
        super();
        const loader = new Loader
        this.camera = new Camera();
        new Lights(this);
        new Skybox(this);
        new Logo(this, loader)
        new Pokeball(this, loader)
        new Entei(this, loader)
        new Groudon(this, loader)
        new Charizard(this, loader)
        new Zekrom(this, loader)
        this.update(renderer)
    }

    private update(renderer){
        renderer.render(this, this.camera);
        requestAnimationFrame(this.update.bind(this, renderer));
    }
}