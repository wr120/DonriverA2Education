export class Cell {
    filter: any;
    constructor(
        public value: any,
        public visible: boolean
    ) {
    }
    addFilter(filter) {
        this.filter = filter;
        return this;
    }
}
