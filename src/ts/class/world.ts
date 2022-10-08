import { Scene } from 'three';
import { Base } from './base';
import { getResources } from '../resource'
import { Box } from '../mesh';

export default class World {
    private scene: Scene;
    constructor(private base: Base) {

        this.scene = this.base.scene
        getResources().then((resource) => {
            const box = new Box(base);
        })

    }

    update() {

    }
}