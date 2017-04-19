import { Car} from 'Car';
export class CarList{

    public list: Car[];
    constructor() {
        this.list = new Array<Car>();
        this.addCarItem(1, 'Chevrolet', 'Malibu', 5);
        this.addCarItem(6, 'Chevrolet', 'Malibu', 8);
        this.addCarItem(14, 'Chevrolet', 'Tahoe', 6);

        this.addCarItem(20, 'Ford', 'Taurus', 12);
        this.addCarItem(32, 'Ford', 'Explorer', 11);

        this.addCarItem(41, 'Nissan', 'Maxima', 9);
        this.addCarItem(50, 'Nissan', 'Frontier', 6);

        this.addCarItem(56, 'Toyota', '4-Runner', 7);
        this.addCarItem(63, 'Toyota', 'Camry', 15);
        this.addCarItem(76, 'Toyota', 'Avalon', 13);

        const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].price = Math.round(Math.random() * 55000 + 15000);
            this.list[i].mileage = (Math.random() * 80000 + 5000).toFixed(1);
            const text = Array(17).join().split(',').map(
                    function() { return s.charAt(Math.floor(Math.random() * s.length)); }
                ).join('');
            this.list[i].vin = text;
        }
    }
    addCarItem(id: number, vendor: string, model: string, count: number) {
    for (let i = 0; i < count; i++) {
      const car = new Car(id + i, vendor, model, 0, '', '');
      this.list.push(car);
    }
  }
}