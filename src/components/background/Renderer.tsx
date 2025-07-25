import { Line, LinearSRGBColorSpace, WebGLRenderer } from "three";
import Scene from "./scene/Scene";

export default class Renderer extends WebGLRenderer {

    constructor() {
        super({ antialias: true, canvas: document.getElementById("bg") });
        this.config();
        new Scene(this);

    }
    private config(){
        this.outputColorSpace = LinearSRGBColorSpace;
        this.setSize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", this.resize);
    }
    private resize = () => window.location.reload();
    
}