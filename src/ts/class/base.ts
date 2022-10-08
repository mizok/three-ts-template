import { Env } from './env';
import { Renderer } from './renderer';
import { Camera } from './camera';
import { Ticker, Sizer } from '../util';
import { getResources } from '../resource'
import { Scene, Clock } from 'three';


export class Base {
    sizer = new Sizer(this.canvas)
    scene = new Scene();
    ticker = new Ticker();
    env = new Env(this);
    camera = new Camera(this);
    renderer = new Renderer(this);
    resources: {
        [key: string]: any
    }

    constructor(public canvas: HTMLCanvasElement) {
        this.initResizeMechanic();
        this.initTickMechanic();
    }

    initResizeMechanic() {
        this.sizer.on('resize', () => {
            this.renderer.resize();
            this.camera.resize();
        })
    }

    initTickMechanic() {
        this.ticker.on('tick', (clock: Clock) => {
            this.renderer.update();
            this.camera.update();
            this.frameListener(clock);
        })
    }

    frameListener(clock: Clock) {

    }

    async getResources() {
        this.resources = await getResources()
    }
}