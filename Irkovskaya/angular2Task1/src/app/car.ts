import { Cell } from 'app/cell';

export class Car {
    visible: boolean;
    constructor(
        public id: number,
        public properties: Cell[],
        public selected: boolean
    ) {
        this.visible = true;
    }
    addProperty(property: Cell) {
        if (this.properties == null) {
            this.properties = new Array<Cell>();
        }
        this.properties.push(property);
        return this;
    }
}
