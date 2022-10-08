import { map } from 'lodash';
import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';
import { Base } from '../class/base';

export class Box {
    mesh: Mesh;
    constructor(private base: Base) {
        this.setModel();

    }


    setModel() {
        this.base.getResources().then(() => {
            const geo = new BoxGeometry(1, 1, 1);
            const mat = new MeshStandardMaterial({
                color: 0xff0000,
                map: this.base.resources.someTexture
            })
            this.mesh = new Mesh(geo, mat);
            this.base.scene.add(this.mesh);
        })

    }
}