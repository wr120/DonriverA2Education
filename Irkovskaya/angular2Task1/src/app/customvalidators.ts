import { Car } from './car';
export class CustomVilidators {
    static isUniq(index: number, list: Car[], value: string): boolean {
        list.forEach(item => {
            if (String(item.properties[index].value) == value) {
                return false;
            }
        });
        return true;
    }
}
