import { off } from "process";
import { PerspectiveCamera } from "three";

export default class Camera extends PerspectiveCamera {

    private container: HTMLElement

    constructor() {
        super(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.container = document.getElementById("container");
        this.container.onscroll = this.moveCamera.bind(this);
        this.moveCamera();
        this.position.y = 2;
    }

    private moveCamera(){
        const scrollTop = this.container.scrollTop;
        const scrollHeight = this.container.scrollHeight;
        const offsetHeight = this.container.offsetHeight;

        const t = scrollTop * 100 / (scrollHeight - offsetHeight);

       // con estos se puede ver para desarrollar los calculos de la posicion y rotacion de la camara
    //console.log(t);  // este muestra la altura total de la pagina

    //console.log(scrollTop) // este muestra la altura que se ha desplazado el scroll en base a los pixeles
       //---------------------de 0 a 1390 depende de la pantalla

    //console.log(scrollHeight) // este muestra la altura total del scroll del contenedor o componente

    //console.log(offsetHeight) // este muestra la altura visible del contenedor

        this.position.z = t * 0.35;
        this.position.x = t * 0.025;
        this.rotation.y = t * 0.025;


    }

}

/* 
 scrollHeight   -   offsetHeight   = scrollTop

 scrollHeight   -   offsetHeight   = 100%
                     scrollTop = x%

                     x = scrollTop * 100 / (scrollHeight - offsetHeight)



*/