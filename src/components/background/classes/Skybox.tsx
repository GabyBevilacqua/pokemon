import { BackSide, Mesh, MeshPhongMaterial, SphereGeometry, TextureLoader } from "three";

export default class Skybox {

    constructor(scene) {
            // creando skybox  no se vera hasta que creemos iluminacion
        const Skygeometry = new SphereGeometry(360, 25, 25); //(360, 60, 40); // Más subdivisiones = mejor proyección
        const loader = new TextureLoader();
        const texture = loader.load('/custom-sky.png');
        const material2 = new MeshPhongMaterial({
            map: texture
        })
        const skybox = new Mesh(Skygeometry, material2);
        skybox.material.side = BackSide;
        scene.add(skybox);
    }
}
