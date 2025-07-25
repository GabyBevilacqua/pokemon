import { Component } from "react";
import { 
    Scene, 
    WebGLRenderer, 
    PerspectiveCamera, 
    Mesh, 
    MeshBasicMaterial, 
    BoxGeometry,
    SphereGeometry,
    TextureLoader,
    BackSide,
    MeshPhongMaterial,
    DirectionalLight,
    AmbientLight,
    HemisphereLight
} from "three";

const crearSkybox = (scene) => {
            // creando skybox  no se vera hasta que creemos iluminacion
        const Skygeometry = new SphereGeometry(360, 25, 25);
        const loader = new TextureLoader();
        const texture = loader.load('/custom-sky.png');
        const material2 = new MeshPhongMaterial({
            map: texture
        })
        const skybox = new Mesh(Skygeometry, material2);
        skybox.material.side = BackSide;
        scene.add(skybox);
}

export default class Background extends Component {

    componentDidMount(): void {
                const scene = new Scene()
        const renderer = new WebGLRenderer({
            antialias: true,
            canvas: document.getElementById("bg")
        });
        const camera = new PerspectiveCamera(
            50, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            1000
        );

        // mover camara
        camera.position.set(0, 0, 5);

        // creando el cubo
        const geometry = new BoxGeometry(1, 1, 1);
        const material = new MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new Mesh(geometry, material);
        scene.add(cube);

        // creando skybox
        crearSkybox(scene);
        
        //creando la iluminacion
        scene.add(new AmbientLight(0xffffff, 0.8));
        scene.add(new HemisphereLight(0xffffff, 0.8));

        renderer.setSize(window.innerWidth, window.innerHeight);

        function animate() {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
       
        }
    render() {
        return <canvas id="bg" />;
    }

}