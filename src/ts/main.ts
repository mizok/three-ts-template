import { Clock } from 'three';
import { Base } from './class/base';
import { Box } from './mesh'
class Main extends Base {

    private box = new Box(this);

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
    }

    override frameListener(clock: Clock) {
        this.box.mesh.rotation.x = Math.sin(clock.getElapsedTime())
    };
}

(() => {
    const cvs = document.querySelector('canvas');
    const instance = new Main(cvs);
})()