import {Bear} from './encouter.js';

export class Environment {

    constructor(name) {
        this.name = name;
        this.encouter = new Bear();
    }

    stumbleUpon() {
        let interaction = this.name + "you just stumbled upon..." + this.encouter.whenEncouter();
        return interaction;
    }
}